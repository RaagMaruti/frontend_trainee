"use client";

import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function getPosts() {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
    const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}

async function sendPost({ userId, id, title, body }) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/`,
			{
				method: "POST",
				body: JSON.stringify({
					userId: userId,
					id: id,
					title: title,
					body: body,
				}),
			}
		);
    if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}


export default function ServerState() {
	const postMutation = useMutation({
		mutationKey: ["send_post"],
		mutationFn: () => sendPost({ userId, id, title, body }),
		onSuccess: () => {
			queryClient.invalidateQueries(["get_posts"]);
		},
	});

	const getQuery = useQuery({
		queryKey: ["get_posts"],
		queryFn: () => getPosts(),
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
					postMutation.mutate({
						userId: 1,
						id: 1,
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
				<ul>
					{getQuery.data.map((i) => (
						<li key={i.id}>{i.title}</li>
					))}
				</ul>
			)}
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