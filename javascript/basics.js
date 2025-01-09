if (1 < 2) {
  var a = 10;
  let b = 20;
  const c = 30;

  a = 500;

  // let cannot be redeclared, but can be reassigned
  // let b = 30;
  b = 50;

  // none can work on const
}

// only "a" can be accessed outside if block
console.log(a);




const arr = [1, 2, 3];
const obj = { name: "raag" };

// we are not re assigning variable, just elements of it
// arrays and strings are also objects
str = "raag";

arr[0] = 10;
obj.name = "maruti";
console.log(typeof arr);

// implicit type conversion
console.log(str + a);



// template string
console.log(`Length is ${str.length}`);

function tagTemplates(strings, ...args) {
  console.log("strings", strings);
  console.log("args", args);

  return "introduce...";
}

const one = 1;
const two = 2;
const message = tagTemplates`Hello, I'm ${one} and ${two} is my favorite color!`;




// Numbers - default 64 bit floats
let num = 150;
console.log(num / "raag");  // NaN
console.log(-num / 0)   // -Infinity

console.log(num.toExponential(2))
console.log(num.toFixed(2))
console.log(num.toString() + " hi")
console.log(num.toPrecision(2))
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// BigInt
let ab = 10000000n;
console.log(ab);




// conditionals
let x = 100;
switch (x) {
  case 1:
  case 2:
    console.log("one or two")
    break;
  default:
    console.log("none");
    break;
}




// loops
for (let i = 0; i < 10; i++) {
  console.log(`hello ${i}`)
}

for (let i in obj) {
  console.log(i + ": " + obj[i])
}

for (let i of arr) {
  console.log(i)
}

function myFunction(value, index, array) {
  txt += value;
}

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
console.log(txt)




// sets
const set = new Set([1, 2, 3, 1])
console.log(set)
set.add(1);
console.log(set)

if (set.has(1)) {
  const map = new Map([[1, "one"], [2, "two"]])
  map.set(1, "oneeee")
  console.log(map.get(1))
}