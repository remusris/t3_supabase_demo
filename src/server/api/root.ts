import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { firstTestRouter } from "./routers/firstTest";
import { exampleRouter } from "./routers/example";
import { firstRouter } from "./routers/firstRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  getTodos: publicProcedure.query(async () => [10, 20, 30]),
  firstTest: firstTestRouter,
  example: exampleRouter,
  first: firstRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;
