import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { type User } from '@supabase/supabase-js';

import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/server/db";
import { cookies } from "next/headers";

type CreateContextOptions = {
  user: User | null;
};

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    user: opts.user,
    prisma,
  };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  );

  const token = opts.req.headers.authorization;

  const { data: { user } } = token
    ? await supabase.auth.getUser(token)
    : await supabase.auth.getUser();

  return createInnerTRPCContext({
    user: user,
  });
};

export const createAppRouterTRPCContext = async () => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  return createInnerTRPCContext({
    user: user,
  });
};

const t = initTRPC.context<typeof createAppRouterTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user?.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
