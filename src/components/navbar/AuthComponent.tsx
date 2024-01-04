import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "../ui/button";
import ProfileButton from "./ProfileButton";

const AuthComponent = async () => {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <ProfileButton user={user} />
  ) : (
    <div className="hidden items-center gap-2 sm:flex">
      <Link href={"/login"} className="w-full sm:w-auto">
        <Button variant="secondary" size="sm" className="w-full">
          Log In
        </Button>
      </Link>
      <Link href="/signup" className="w-full sm:w-auto">
        <Button variant="default" size="sm" className="w-full">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthComponent;
