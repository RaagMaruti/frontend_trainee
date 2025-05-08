export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();
  console.log(posts);

  return (
    <>
      <div>
        <div>Get all posts in console</div>
      </div>
    </>
  );
}
