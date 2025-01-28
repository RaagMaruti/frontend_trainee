function any(arr: any[]): any {
  return arr[0];
}
// problem with such function is that it accepts any type and can return another types as well
// we want it to accept any type but also return the same one, so we use generic type

let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["one", "two"];
function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
console.log(last(arr1));
console.log(last(arr2));

// optional args by "?"
// this is also xample of functional overloading
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  console.log();
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
