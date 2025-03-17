"use client";

import {
  useQuery,
  useQueries,
  useMutation,
  QueryClient,
  useQueryClient,
  getQueryCache,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retryDelay: 500,
    },
  },
});

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function sendPost({ userId, title, body }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      title: title,
      body: body,
    }),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default function ServerState({ fetchPosts }) {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();

  // queryCache.subscribe((event) => {
  //   console.log("Cache Updated:", event, queryCache);
  // });

  const postMutation = useMutation({
    mutationKey: ["send_post"],
    mutationFn: ({ userId, title, body }) => sendPost({ userId, title, body }),
    onSuccess: () => {
      queryClient.invalidateQueries(["get_posts"]);
    },
    onMutate: () => {
      console.log("Mutation");
    },
  });

  const getQueries = useQueries({
    queries: fetchPosts.map((id) => {
      return {
        queryKey: ["get_posts", id],
        queryFn: () => getPost(id),
        // refetchInterval: 2000,
        // enabled: false, will not fetch on mount, no refetch in background
        retry: 3,
      };
    }),
  });

  const getQuery = useQuery({
    queryKey: ["get_post"],
    queryFn: () => getPost(60),
    initialData: {
      id: 1001,
      title: "cached until fetched",
      body: "cached until fetched",
    },
    staleTime: 2000,
  });

  if (postMutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (postMutation.isError) {
    return <div>{postMutation.error}</div>;
  }

  return (
    <>
      <button
        onClick={() => {
          postMutation.mutate({
            userId: 1,
            title: "my post",
            body: "this is a dummy post, created by me",
          });
        }}
      >
        Click me to send data
      </button>
      {postMutation.data && (
        <p style={{ margin: "1em" }}>
          Post created on ID {postMutation.data.id}
        </p>
      )}

      {getQuery.data && (
        <p style={{ margin: "1em" }} key={getQuery.data.id}>
          Fetching Data - post 60
          <br />
          Title: {getQuery.data.title}
          <br />
          Body: {getQuery.data.body}
        </p>
      )}

      <div>
        {getQueries.map((query, index) => {
          if (query.isLoading)
            return <p key={index}>Loading post {fetchPosts[index]}...</p>;
          if (query.error)
            return (
              <p key={index * 10}>Error loading post {fetchPosts[index]}</p>
            );
          if (query.data)
            return (
              <p style={{ margin: "1em" }} key={query.data.id * 100}>
                Title: {query.data.title}
                <br />
                Body: {query.data.body}
              </p>
            );
        })}
      </div>
    </>
  );
}

// 'https://jsonplaceholder.typicode.com/todos/1'

// status === 'pending' - The query has no data yet
// status === 'error' - The query encountered an error
// status === 'success' - The query was successful and data is available

// fetchStatus === 'fetching' - The query is currently fetching.
// fetchStatus === 'paused' - The query wanted to fetch, but it is paused.
// fetchStatus === 'idle' - The query is not doing anything at the moment.

// The status gives information about the data: Do we have any or not?
// The fetchStatus gives information about the queryFn: Is it running or not?

// cached data is considered stale

// mode: online - normal, without connection fetchStatus === "paused"
// mode: always - no "paused", if ot possible directly "error" status
// mode: offlineFirst - one request, no reties on failure

// gcTime = garbage collection time - default 5 mins
