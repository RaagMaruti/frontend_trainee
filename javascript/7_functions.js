// declared functions are always hoisted, but not expressions
console.log(myFunction(5))
function myFunction(y) {
    return y * y;
}

// arrow function
const func = (y) => y * y;
console.log(func(5))


const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName
    },
    all: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

person.all.call(person1, "Oslo", "Norway")// used to invoke method, by passing object as arguement, other args normal
person.all.apply(person1, ["Oslo", "Norway"]) // used to invoke method, by passing object as arguement, other args as array
person.fullName.bind(member)() // same but deffered invocation, when new function is called


// Closures - inner functions have reference of parent functions environment, even when invoked from outside
// here "count()" has access to "temp" due to closure
function counter() {
    let temp = 100;
    return function () { return temp += 1 }
}

let count = counter()
console.log(count())
console.log(count())
console.log(count())