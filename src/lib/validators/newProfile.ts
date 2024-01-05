import { z } from "zod";
import { RoleType } from "@prisma/client";

export const newProfileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.nativeEnum(RoleType),
  skills: z
    .object({ name: z.string().min(1) })
    .array()
    .min(1),
  bio: z.string().min(100).max(500),
  github: z.string(),
  linkedin: z.string(),
  website: z.union([z.literal(""), z.string().trim().url()]),
});
