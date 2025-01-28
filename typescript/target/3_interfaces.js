function area(shape) {
    if (shape.type == "circle") {
        shape.radius--;
        return 3.14 * shape.radius ** 2;
    }
    return shape.sideLength ** 2;
}
const c = {
    type: "circle",
    radius: 10,
};
const s = {
    type: "square",
    sideLength: 10,
};
console.log(area(c));
console.log(area(s));
function longest(a, b) {
    if (a.length >= b.length) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
