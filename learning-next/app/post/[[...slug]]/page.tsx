import fetchPost from "../../../utils/fetchPost";
import Loading from "./loading";
import { Suspense } from "react";

import ChildFetch from "../../../components/ChildFetch";
import Basic from "../../../components/Basic";

// not able to use server actions with generateStaticParams

export async function generateStaticParams() {
  return ["1", "2", "3"].map((num) => ({
    slug: [num],
  }));
}

export default async function Page({ params }: any) {
  const { slug } = await params;
  console.log(slug[0]);
  const post = (await fetchPost(slug[0])) || null;

  return (
    <>
      {slug ? (
        <div>
          {slug.map((s, i) => (
            <span key={i}>{s}, </span>
          ))}
          <Suspense fallback={<Loading />}>
            {post && (
              <div>
                <div>ID: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
              </div>
            )}
          </Suspense>

          {/* example of Request Memoization, only one for all below components, only lasts the render lifecycle */}

          <ChildFetch />
          <ChildFetch />
          <ChildFetch />
          <ChildFetch />
          <Basic />
        </div>
      ) : (
        <div>No slug </div>
      )}
    </>
  );
}
