import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/server/api/root";
import { createAppRouterTRPCContext } from "~/server/api/trpc";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createAppRouterTRPCContext,
  });
};

export { handler as GET, handler as POST };
