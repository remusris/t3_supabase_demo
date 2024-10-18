"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api, trpc } from "~/utils/api";
import { httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";

export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      // switch to relative path
      // links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
      links: [httpBatchLink({ url: "/api/trpc" })],
      transformer: SuperJSON,
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
