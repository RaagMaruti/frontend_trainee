const person = {
    name: "raag",
    age: 22,
    get() { return this.name + " - " + this.age },
    set(n, a) { this.name = n; this.age = a },
}

// setter, getter
person.set("maruti", 14)
console.log(person.get(), "\n\n")


// console.log(x === person) -- true, only reference is assigned
let x = person;
x.age = 100;
console.log(person, "\n\n")
// mutable, since only reference is being copied, this is a SHALLOW copy

x = JSON.parse(JSON.stringify(person))
// use this way to create DEEP copies even to the nested objects

// entries method, gives list of key value pairs
let temp = Object.fromEntries(Object.entries(person));
console.log(temp, "\n\n")


// constructor
function Person(n, a) {
    this.name = n;
    this.age = a;
    this.get = function () {
        return this.name + " - " + this.age;
    };
}
let obj = new Person("joshi", 100)
console.log(obj.get(), "\n\n");


let y = Object.create(person)
// console.log(y === person) -- false, only properties are being copied
// we can do same with Object.assign(y, person)
// **** here a prototype chain is being created **** 
// "y" ----> "person" ----> null


// no modification, deletion, addition
// Object.freeze(person)

// no deletion, addition
// Object.seal(person)

// no addition, can change property descriptors like read/write access
// Object.preventExtensions(person)


// groupBy
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

// Callback function to Group Elements
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result.ok, "\n\n", result.low)