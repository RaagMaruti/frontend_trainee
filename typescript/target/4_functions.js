function any(arr) {
    return arr[0];
}
let arr1 = [1, 2, 3];
let arr2 = ["one", "two"];
function last(arr) {
    return arr[arr.length - 1];
}
console.log(last(arr1));
console.log(last(arr2));
function myForEach(arr, callback) {
    console.log();
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
