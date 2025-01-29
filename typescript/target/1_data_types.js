var msg = "hello";
console.log(`${msg}`);
let num = 100;
let bool = true;
let und = undefined;
let none = null;
let sym = Symbol("raag");
let big = 100000000000n;
let str = "hello world";
const lit = "hello world";
let temp = [1, 2, 3];
let temp2 = ["1", "2", "3"];
function get(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
let id = "id";
get(id);
function getData() {
    return [200, "data fetched"];
}
const [statusCode, message] = getData();
console.log(statusCode, message);
let val = 1 | 2 | 3;
if (null === undefined) {
    console.log("yes");
}
