function iterator(arr) {
    let i = 0;
    return {
        next: function () {
            if (i < arr.length) {
                return {
                    value: arr[i++],
                    done: false,
                };
            } else {
                return {
                    value: undefined,
                    done: true,
                };
            }
        },
    };
}

const arr = [1, 2, 3];
const vals = iterator(arr);

console.log(vals.next());
console.log(vals.next());
console.log(vals.next());
console.log(vals.next());


function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }