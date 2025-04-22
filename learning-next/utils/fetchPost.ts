// revalidation can be time based or on demand

export const revalidate = 3600; // invalidate every hour

// unconditionally we can use revalidatePath / Tag

export default async function fetchPost(id: number) {
  try {
    const response = await fetch(process.env.POST_URL + id, {
      cache: "force-cache",
      next: { tags: ["posts"] },
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
