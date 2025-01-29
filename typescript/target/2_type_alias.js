const add = (a, b) => a + b;
const sub = (a, b) => a - b;
function display(user) {
    console.log(user.id, user.name);
}
const user = {
    id: "1",
    name: "raag",
};
display(user);
function sum({ id, b, c }) {
    console.log(id + b + c);
}
sum({ id: 10, b: 20, c: 30 });
