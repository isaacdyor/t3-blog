import { profileRouter } from "@/server/api/routers/profiles";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  profiles: profileRouter,
});

export type AppRouter = typeof appRouter;
