"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ServerState from "@/components/ServerStates";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServerState />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
