async function temp() {
  await fetch("https://jsonplaceholder.typicode.com/todos/10");
}

export default async function Basic() {
  await temp();
  return <p>Basic</p>;
}
