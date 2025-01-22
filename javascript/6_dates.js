// year, month, day, hour, min, sec, ms
// this is by defualt the ISO standard
console.log(Date())
console.log(new Date("2003-09-02"))

// short date format
console.log(new Date("02/09/2003"))

// parsing to another format
let msec = Date.parse("March 21, 2012");
console.log(new Date(msec))

// all have simillar setter methods as well
console.log("\ngetFullYear:", new Date().getFullYear())
console.log("\ngetMonth:", new Date().getMonth())
console.log("\ngetDate:", new Date().getDate())
console.log("\ngetDay:", new Date().getDay())
console.log("\ngetHours:", new Date().getHours())
console.log("\ngetMinutes:", new Date().getMinutes())
console.log("\ngetSeconds:", new Date().getSeconds())
console.log("\ngetMilliseconds:", new Date().getMilliseconds())
console.log("\ngetTime:", new Date().getTime())

console.log("\nnow in msec:", new Date(Date.now()))