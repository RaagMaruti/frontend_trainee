var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
let box = { height: 5, width: 6, scale: 10 };
function classD(constructor) {
    console.log("class");
}
function propertyD(target, key) {
    console.log("property", key);
}
function methodD(target, key) {
    console.log("method", key);
}
function parameterD(target, methodName, paramIndex) {
    console.log("parameter", methodName, paramIndex);
}
let Deco = class Deco {
    constructor() { }
    myMethod(myParam) { }
};
__decorate([
    propertyD
], Deco.prototype, "myProp", void 0);
__decorate([
    methodD,
    __param(0, parameterD)
], Deco.prototype, "myMethod", null);
Deco = __decorate([
    classD
], Deco);
var hi;
(function (hi) {
    hi[hi["one"] = 1] = "one";
    hi[hi["two"] = 2] = "two";
    hi["three"] = "3";
})(hi || (hi = {}));
const objEnum = {
    one: 1,
    two: 2,
};
console.log(objEnum["one"]);
console.log(hi[1]);
class Dog {
}
let pet;
pet = new Dog();
let x = (a) => 0;
let y = (b, s) => 0;
y = x;
let foo = null;
foo = {
    bar: {
        baz: () => {
            console.log("baz");
        },
    },
};
let a = foo ?? "foo not defined";
console.log(a);
