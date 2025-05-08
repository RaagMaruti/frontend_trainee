import fetchPost from "../utils/fetchPost";

export default async function ChildFetch() {
  const post = (await fetchPost(1)) || null;
  return (
    <>
      <br />
      <br />
      <div>in Child fetch component</div>
      {post && (
        <div>
          <div>ID: {post.id}</div>
          <div>Title: {post.title}</div>
        </div>
      )}
      <ChildChildFetch />
    </>
  );
}

async function ChildChildFetch() {
  const post = (await fetchPost(1)) || null;
  return (
    <>
      <br />
      <br />
      <div>in Child-Child fetch component</div>
      {post && (
        <div>
          <div>ID: {post.id}</div>
          <div>Title: {post.title}</div>
        </div>
      )}
    </>
  );
}
