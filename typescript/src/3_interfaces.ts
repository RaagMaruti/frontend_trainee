interface Circle {
  readonly type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  sideLength: number;
}

// interface All extends Circle, Square{} ---> only works if they do not have conflicting property names

function area(shape: Circle | Square): number {
  if (shape.type == "circle") {
    // shape.type = "square" --> not allowed on readonly
    shape.radius--;
    return 3.14 * shape.radius ** 2;
  }
  return shape.sideLength ** 2;
}

const c: Circle = {
  type: "circle",
  radius: 10,
};

const s: Square = {
  type: "square",
  sideLength: 10,
};

console.log(area(c));
console.log(area(s));

// example 2 - type on interface with constraints
interface Dimensions {
  length?: number;
  // optional value
}
function longest<Type extends Dimensions>(a: Type, b: Type) {
  if (a.length >= b.length) {
    console.log(a);
  } else {
    console.log(b);
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
