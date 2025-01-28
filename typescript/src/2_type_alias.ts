type User = {
  id: string;
  name: string;
};

// checking type with alias
function display(user: User) {
  console.log(user.id, user.name);
}

const user: User = {
  id: "1",
  name: "raag",
};

display(user);

// example 2
type ABC = { id: number; b: number; c: number };
function sum({ id, b, c }: ABC) {
  console.log(id + b + c);
}
sum({ id: 10, b: 20, c: 30 });

// intersection on same property name makes it "never", so it does not work
// type Both = User & ABC;

// const b: Both = {
//   id: "2",
//   name: "both",
//   b: 200,
//   c: 300,
// };
