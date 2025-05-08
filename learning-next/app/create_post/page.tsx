// unconditionally we can use revalidatePath / Tag
// import { revalidateTag } from "next/cache";

async function createPost() {
  try {
    // revalidateTag("post");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/",
      {
        method: "POST",
        body: JSON.stringify({ id: 101, title: "my post" }),
      }
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}

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
