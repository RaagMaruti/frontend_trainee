"use client";

import { useEffect } from "react";
import fetchPost from "../utils/fetchPost";

export default async function ChildFetch() {
  let data = null;
  useEffect(() => {
    async function temp() {
      const post = (await fetchPost(11)) || null;
      return post;
    }

    // const post = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const data = await post.json();
    data = temp();
  }, []);

  return <> {data && <p>{data.id}</p>}</>;
}
