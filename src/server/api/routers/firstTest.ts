import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { TRPCError } from "@trpc/server";

export const firstTestRouter = createTRPCRouter({
    tester: publicProcedure
        .query(({ ctx }) => {
            return "hello"
        })
})