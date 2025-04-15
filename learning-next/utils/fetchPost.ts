// revalidation can be time based or on demand

export default async function fetchPost(id: number) {
  try {
    const response = await fetch(process.env.POST_URL + id, {
      cache: "force-cache",
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
