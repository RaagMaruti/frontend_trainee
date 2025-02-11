const arr = [1, 2, 3, 4, 5, 6]
const a = arr
a[0] = 100;
console.log("\n", arr.join(" * "))
// mutable, since only reference is being copied.

arr.pop()
console.log("\npop:", arr)

arr.push(200)
console.log("\npush:", arr)

arr.shift()
console.log("\nshift:", arr)

arr.unshift(1000)
console.log("\nunshift:", arr)

// do not use "delete", makes undefined holes
console.log("\nslice:", arr.slice(1, 3))

// splice, pos and number of deletion
console.log("\nsplice:", arr.toSpliced(1, 2))

if (arr.includes(1000) == true) {
    // only finds first instance
    console.log("\nfind even:", arr.find(function (val, index, arr) { return (val % 2) == 0 }))
    console.log("\nfind index of odd value:", arr.find(function (val, index, arr) { return (index % 2) != 0 }))
    console.log("\nindex of:", arr.lastIndexOf(200))
}

const flat = [[11, 25], [13, 34], [57, 46]].flat()
console.log("\nflat:", flat)

// sort, reverse are string based, num sort
console.log("\nsort:", flat.sort((a, b) => a - b))

const new_arr = flat.map((value, index, array) => value * 2)
console.log("\nmap:", new_arr)

// every() and some() for passing test
console.log("\nfilter:", new_arr.filter((value, index, array) => value % 10 == 0))

console.log("\nreduce:", new_arr.reduce((sum, value, index, array) => sum + value))