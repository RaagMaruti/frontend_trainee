"use client";

import { useInfiniteQuery, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retryDelay: 500,
    },
  },
});

const fetchProjects = async (pageParam = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pageParam}`
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};

const ProjectsList = () => {
  let pageParam = 1;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["posts", pageParam],
      queryFn: () => fetchProjects(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.nextCursor;
        // return lastPage?.length ? allPages.length + 1 : undefined;
      },
    });

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching data.</p>;

  return (
    <div>
      {data && (
        <p key={data.id}>
          {data.title}, {data.body}
        </p>
      )}

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ProjectsList;
