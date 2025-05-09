import fetchPost from "../../../utils/fetchPost";
import ChildFetch from "../../../components/ChildFetch";
import Basic from "../../../components/Basic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "page",
  description: "maru page",
  authors: [{ name: "raag" }],
};

// not able to use server actions with generateStaticParams
export async function generateStaticParams() {
  return ["1", "2", "3"].map((num) => ({
    slug: num,
  }));
}

export default async function Page({ params }: any) {
  const { slug } = await params;
  const post = (await fetchPost(slug)) || null;

  return (
    <>
      {slug ? (
        <div>
          {post && (
            <div>
              <div>ID: {post.id}</div>
              <div>Title: {post.title}</div>
            </div>
          )}

          {/* example of Request Memoization, only one for all below components, only lasts the render lifecycle */}
          {/* here i have removed Loading boundary, since that was being displayed first even in SSG while disabling JS */}

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
