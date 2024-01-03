import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return <p>hello</p>;
}
