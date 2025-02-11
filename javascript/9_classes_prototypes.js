// classes
class Person {
    #id = 0 //private property
    constructor(name, age) {
        this.#id++;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("\n", this.#id, this.name, this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }
    display() {
        console.log("\n", this.name, this.age, this.salary);
    }
    static hello() {
        console.log("\nHello this is an Employee.");
    }
}

Employee.hello() // static method to be called directly by class
const p = new Person("raag", 22)
p.display()
const e = new Employee("raag", 22, 7000)
e.display()


// prototypes
const parent = {
    value: 2,
    method() {
        return this.value + 1;
    },
};
parent.method() // 3

const child = {
    __proto__: parent,
};
child.method() // 3
child.value = 4;
child.method() // 5



// prototype chain
const corporate = {
    salary: 7000,
    company: "maruti"
}
const address = {
    area: "iskcon",
}
const person = {
    name: "raag"
}
Object.setPrototypeOf(corporate, address)
Object.setPrototypeOf(person, corporate)

console.log("\nperson:", person, "\n")
// person has only one property, due to prototypical inhertience it gets other properties

// only person's property is changed
person.salary = 2000

// change will be reflected in parent as well
person.__proto__.salary = 200000

for (let i in person) {
    console.log(`${i}: ${person[i]}`)
}

console.log("\ncorporate", corporate) // salary == 200000

console.log("\nchecking:", Object.hasOwn(person, "company")) // false

// trying to access nonexistent properties will always traverse the full prototype chain. BAD FOR PERFORMANCE