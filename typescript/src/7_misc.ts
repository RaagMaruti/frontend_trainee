/// <reference lib="es2017.string" />
// triple slash directives are comments with XML tag as content. They are directives for the compiler. Always at top, used for preprocessing.

// narrowing is basically checking such identity or membership or equality cases, on top of normal types
// assign never after checking all cases

function printAll(strs: string | string[] | null) {
  // first part of if is to check whether strings[] is null or not
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

//
//
// declaration merging
interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };

//
//
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
// Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
// Parameter Decorators are applied for the constructor.
// Class Decorators are applied for the class.

function classD(constructor: Function) {
  console.log("class");
}

function propertyD(target: any, key: string) {
  console.log("property", key);
}

function methodD(target: any, key: string) {
  console.log("method", key);
}

function parameterD(target: any, methodName: string, paramIndex: number) {
  console.log("parameter", methodName, paramIndex);
}

@classD
class Deco {
  @propertyD
  myProp: string;

  constructor() {}

  @methodD
  myMethod(@parameterD myParam: string) {}
}

//
//
// enums and constant objectas are almost same
enum hi {
  one = 1,
  two, // auto increaments to 2
  three = "3",
}

const objEnum = {
  one: 1,
  two: 2,
} as const;

console.log(objEnum["one"]);
console.log(hi[1]); // reverse mapping only in enum

//
//
// valid dues to both have same structural ("duck") types
// only declared variables are not viible in JS
interface Pet {
  name: string;
}
class Dog {
  name: string;
}
let pet: Pet;
pet = new Dog();

//
//
//
let x = (a: string) => 0;
let y = (b: string, s: number) => 0;
y = x; // OK, ignoring extra params is allowed
// x = y; // Error, not enough params

//
//
// optional chaining
let foo = null;
foo = {
  bar: {
    baz: () => {
      console.log("baz");
    },
  },
};

// let a = foo?.bar.baz();
// let a = foo === null || foo === undefined ? undefined : foo.bar.baz();

//
//
// null coalescing
let a = foo ?? "foo not defined";
console.log(a);