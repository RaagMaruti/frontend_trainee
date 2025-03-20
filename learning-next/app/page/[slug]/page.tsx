import fetchPost from "./fetchPost";

export default async function Page({ params }: any) {
  const post = (await fetchPost(params.slug)) || null;

  return (
    <>
      {post && (
        <div>
          <div>ID: {post.id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
        </div>
      )}
    </>
  );
}
