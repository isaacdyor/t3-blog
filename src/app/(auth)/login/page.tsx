"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

import { signIn } from "../actions";
import OauthButton from "@/components/auth/OauthButton";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type LoginInput = z.infer<typeof registerSchema>;

export default function Login() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginInput) => {
    const result = await signIn(data);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="flex">
      <div className="bg-secondary/15 hidden h-screen grow lg:block" />
      <div className="bg-background h-screen w-full lg:w-1/2">
        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-md p-8">
            <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="animate-in text-muted-foreground flex w-full flex-1 flex-col justify-center gap-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your password"
                          type="password"
                          autoComplete="on"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="default" className="my-3 w-full" type="submit">
                  Sign in
                </Button>
                {error && (
                  <div className="bg-destructive/10 border-destructive mb-3 mt-1 rounded-md border p-3">
                    <p className="text-destructive text-center text-sm font-medium">
                      {error}
                    </p>
                  </div>
                )}
              </form>
            </Form>
            <div className="flex items-center gap-2 py-4">
              <hr className="w-full" />
              <p className="text-muted-foreground text-xs">OR</p>
              <hr className="w-full" />
            </div>
            <OauthButton provider={"google"} />
            <OauthButton provider={"github"} />
            <p className="text-muted-foreground py-4 text-center text-sm underline">
              <Link href="/signup">Don&apos;t have an account? Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
