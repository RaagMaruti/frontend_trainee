var msg = "hello";
console.log(`${msg}`);
// downleveling to older js versions by default, so template will be normal strings
// no error msg, since no error

// type if not explicit, will be inferred just like JS

// primitives
let num: number = 100;
let bool: boolean = true;
let und: undefined = undefined;
let none: null = null;
let sym: symbol = Symbol("raag");
let big: bigint = 100000000000n;

// let variable will have a type
// but const variable has a typed literal
// to check this hover over them
let str = "hello world";
const lit = "hello world";

// function check(letter: "A" | "B") {
//   console.log(letter);
// }
// let letter = "A";
// check(letter);
// this will show error, letter is a string, args are string literals, not same

// arrays
let temp: number[] = [1, 2, 3];
let temp2: string[] = ["1", "2", "3"];

// union on types
function get(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

let id: number | string | null = "id";
get(id);

// tuples - where types of indexes cannot be changed
type Res = [number, string];
function getData(): Res {
  return [200, "data fetched"];
}
const [statusCode, message] = getData();
console.log(statusCode, message);

// Union on values
let val: number = 1 | 2 | 3;

// will be true if used "=="
if (null === undefined) {
  console.log("yes");
}

// The "unknown" type represents any value. This is similar to the "any" type, but is safer because it’s not legal to do anything with an unknown value:
// "never" is for the part of code that should be unreachable, in return type it means that functions throws error
// "void" is for the absence of a return value
