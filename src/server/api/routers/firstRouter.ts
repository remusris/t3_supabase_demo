import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const firstRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  create: publicProcedure
    .input(z.object({ firstEntry: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.example.create({
        data: {
          firstEntry: input.firstEntry,
        },
      });
    }),

  getAllPrivate: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.privateExample.findMany({
      where: {
        user_id: ctx.user.id,
      },
    });
  }),

  createPrivate: protectedProcedure
    .input(z.object({ user_id: z.string(), firstEntry: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.privateExample.create({
        data: {
          firstEntry: input.firstEntry,
          user_id: input.user_id,
        },
      });
    }),
});
