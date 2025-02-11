abstract class Base {
  private no: string = "will not be accessed in derived";
  readonly base: string;
  constructor(b: string) {
    this.base = b;
  }

  display() {
    console.log(this.base);
  }

  abstract toOverride(): void;
}

class Derived extends Base {
  derived: string;
  constructor(b: string, d: string) {
    super(b);
    this.derived = d;
    Derived.counter();
  }

  static count: number = 0;
  static counter() {
    this.count++;
  }

  display(): void {
    console.log(Derived.count, this.base, this.derived);
  }

  toOverride(): void {
    console.log("this abstract method is overridden");
  }
}

class Generic<T> {
  val: T;
  constructor(v: T) {
    this.val = v;
  }
  display = () => {
    console.log(this.val);
  };
}

const obj = new Derived("base", "derived");
obj.display();
obj.toOverride();
const genNum = new Generic(100);
const genStr = new Generic("raag");
genNum.display();
genStr.display();
