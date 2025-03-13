"use client";

import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ServerState() {
  const postMutation = useMutation({
    mutationKey: ["posts"],
    mutationFn: (userId, id, title, body) =>
      fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          id: id,
          title: title,
          body: body,
        }),
      })
        .then((res) => res.json())
        .catch((err) => err),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const getQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => res.json())
        .catch((err) => err),
    refetchInterval: 2000,
    enabled: postMutation?.data?.userId !== null,
    // staleTime
  });

  if (getQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getQuery.isError) {
    return <div>{getQuery.error}</div>;
  }

  //   return <></>;

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
          postMutation.mutate(
            1,
            1,
            "my post",
            "this is a dummy post, created by me"
          );
        }}
      >
        Click me to send data
      </button>
      {postMutation.data && <p>Post created on ID {postMutation.data.id}</p>}

      <ul>
        {getQuery.data.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </>
  );
}

// 'https://jsonplaceholder.typicode.com/todos/1'
