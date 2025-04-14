"use server";

export default async function fetchPost(id: number) {
  try {
    const response = await fetch(process.env.POST_URL + id, {
      cache: "no-cache",
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
