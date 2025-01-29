class Base {
    constructor(b) {
        this.no = "will not be accessed in derived";
        this.base = b;
    }
    display() {
        console.log(this.base);
    }
}
class Derived extends Base {
    constructor(b, d) {
        super(b);
        this.derived = d;
        Derived.counter();
    }
    static counter() {
        this.count++;
    }
    display() {
        console.log(Derived.count, this.base, this.derived);
    }
    toOverride() {
        console.log("this abstract method is overridden");
    }
}
Derived.count = 0;
class Generic {
    constructor(v) {
        this.display = () => {
            console.log(this.val);
        };
        this.val = v;
    }
}
const obj = new Derived("base", "derived");
obj.display();
obj.toOverride();
const genNum = new Generic(100);
const genStr = new Generic("raag");
genNum.display();
genStr.display();
