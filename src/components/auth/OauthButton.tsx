"use client";

import { Button } from "@/components/ui/button";
import { redirect, usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { Provider } from "@supabase/supabase-js";
import { FaGithub } from "react-icons/fa";
import { createClient } from "@/utils/supabase/client";

const OauthButton: React.FC<{ provider: Provider }> = ({ provider }) => {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
  };

  if (provider === "google") {
    return (
      <Button
        variant="outline"
        className="text-muted-foreground mb-2 w-full font-normal"
        onClick={() => handleLogin().catch(console.error)}
      >
        <div className="flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          <p>Sign in with Google</p>
        </div>
      </Button>
    );
  }

  if (provider === "github") {
    return (
      <Button
        variant="outline"
        className="text-muted-foreground mb-2 w-full font-normal"
        onClick={handleLogin}
      >
        <div className="flex items-center gap-2">
          <FaGithub className="h-5 w-5" />
          <p>Sign in with GitHub</p>
        </div>
      </Button>
    );
  }
};

export default OauthButton;
