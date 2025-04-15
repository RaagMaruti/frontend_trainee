import fetchPost from "../utils/fetchPost";

async function temp() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const post = (await fetchPost(1)) || null;
  return post;
}

export default async function ChildFetch() {
  let post = null;
  post = await temp();

  return (
    <>
      <br />
      <br />
      <div>in Child fetch component</div>
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
