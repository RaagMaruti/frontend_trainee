str = "raag joshi"
console.log("\nat:", str.at(-1)) // nefative index are not naturally supported

// str[0] = "h" -- not allowed, strings are immutable
console.log("\nslice:", str.slice(1, 4))

// pos, number of chars
console.log("\nsubstr:", str.substr(5, 3))

console.log("\ntrim:", "  temp temp  ".trimStart())

// num is total length
console.log("\npad:", str.padEnd(str.length + 5, "*/"))

// only first occurance, flag insensitive by "i"
console.log("\nreplace:", str.replace("/JOSHI/i", "maruti"))

console.log("\nreplace:", str.replaceAll("a", "A"))

console.log("\nsplit:", str.split(" "))

console.log("\nstartswith:", str.startsWith("raag"))

console.log("\nendswith:", str.endsWith("joshi"))

let text1 = "Please locate where 'locate' occurs!";
console.log("\nindexOf:", text1.indexOf("locate", 15))
// search is same as indexOf but does not take position arguement, both only return one match

let text2 = "The rain in SPAIN stays mainly in the plain";
console.log("\nmatch:", text2.match(/ain/i)) //returns array of match

let text3 = "Hello world, welcome to the universe.";
console.log("\nincludes:", text3.includes("world", 12)) // second arg is position to serach from