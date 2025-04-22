import createPost from "../../utils/createPost";

export default async function Page() {
  await createPost();
  return (
    <>
      <div>
        <div>By reaching to this page, you have created a post.</div>
      </div>
    </>
  );
}
