"use server";

export default async function fetchPost(id: number) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
}
