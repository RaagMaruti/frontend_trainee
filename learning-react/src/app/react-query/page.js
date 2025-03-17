"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ServerState from "@/components/ServerStates";
import InfiniteQuery from "@/components/InfiniteQuery";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServerState fetchPosts={[1, 2, 3]} />
      {/* <InfiniteQuery /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
