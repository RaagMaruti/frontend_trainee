// declared functions are always hoisted, but not expressions
console.log(myFunction(5));
function myFunction(y) {
  return y * y;
}

// arrow function
const func = (y) => y * y;
console.log(func(5));

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  details: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

console.log("\ncall", person.details.call(person1, "Oslo", "Norway")); // invoked directly, by passing object as arguement, other args normal
console.log("\napply", person.details.apply(person1, ["Oslo", "Norway"])); // invoked directly, by passing object as arguement, other args as array

function rev() {
  console.log(this.firstName + "," + this.lastName);
}

console.log("\nbind", rev.bind(person1)); // not invoked directly
let binded = rev.bind(person1);
binded() // invoked when we wanted to

// Closures - inner functions have reference of parent functions environment, even when invoked from outside
// here "count()" has access to "temp" due to closure
function counter() {
  let temp = 100;
  return function () {
    return (temp += 1);
  };
}

let count = counter();
console.log("\ncount1", count());
console.log("\ncount2", count());
console.log("\ncount3", count());
