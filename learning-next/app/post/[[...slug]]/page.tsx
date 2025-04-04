import fetchPost from "../../../utils/fetchPost";
import Loading from "./loading";
import { Suspense } from "react";

import ChildFetch from "../../../components/ChildFetch";

export default async function Page({ params }: any) {
  const { slug } = await params;
  console.log(slug);
  const post = (await fetchPost(slug)) || null;

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
          <ChildFetch />
        </div>
      ) : (
        <div>No slug </div>
      )}
    </>
  );
}
