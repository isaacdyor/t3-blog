"use client";

import { signUp } from "../actions";
import { useState } from "react";
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
import React from "react";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type SignupInput = z.infer<typeof registerSchema>;

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<SignupInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupInput) => {
    setSuccess("Check your email for further instructions");
    const result = await signUp(data);
    if (result?.error) {
      setSuccess(null);
      setError(result.error);
    }
  };

  return (
    <>
      <hr className="border-border my-4" />
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
          {success && (
            <div className="bg-secondary/50 border-border mt-3 rounded-md border p-3">
              <p className="text-muted-foreground text-center text-sm font-medium">
                {success}
              </p>
            </div>
          )}
          <Button variant="default" className="my-3 w-full" type="submit">
            Sign up
          </Button>
          {error && (
            <div className="bg-destructive/10 border-destructive mb-4 mt-1 rounded-md border p-3">
              <p className="text-destructive text-center text-sm font-medium">
                {error}
              </p>
            </div>
          )}
        </form>
      </Form>

      <p className="text-muted-foreground py-2 text-center text-sm underline">
        <Link href="/signup">Already have an account? Sign in</Link>
      </p>
    </>
  );
}
