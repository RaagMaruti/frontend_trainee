// unconditionally we can use revalidatePath / Tag
import { revalidateTag } from "next/cache";

export default async function createPost() {
  try {
    // revalidateTag("post");
    const response = await fetch(process.env.POST_URL, {
      method: "POST",
      body: JSON.stringify({ id: 101, title: "my post" }),
    });
    console.log("hello");
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
