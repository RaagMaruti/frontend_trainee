// year, month, day, hour, min, sec, ms
// this is by defualt the ISO standard
let date = new Date();
let myDate = new Date("2003-09-02");

// date arithmetic
let diff = date - myDate;
console.log("\ndiff years:", Math.ceil(diff / (1000 * 60 * 60 * 24 * 365)));

// rolling over
myDate.setDate(myDate.getDate() + 30);
console.log("\nroll over month changes:", myDate);

// timezones
console.log("\nUTC:", date.toISOString());
console.log("\nlocal:", date.toLocaleString());

// parsing to another format
let msec = Date.parse("March 21, 2012");
console.log("\nmsec:", new Date(msec));

// all have simillar setter methods as well
console.log("\ngetDay:", new Date().getDay());
console.log("\ngetFullYear:", new Date().getFullYear());
console.log("\ngetMonth:", new Date().getMonth());
console.log("\ngetDate:", new Date().getDate());
console.log("\ngetHours:", new Date().getHours());
console.log("\ngetMinutes:", new Date().getMinutes());
console.log("\ngetSeconds:", new Date().getSeconds());
console.log("\ngetMilliseconds:", new Date().getMilliseconds());
console.log("\ngetTime:", new Date().getTime());

let myFormat = { year: "numeric", month: "numeric", hour: "numeric" };
console.log("\ncustome format:", date.toLocaleString("en-US", myFormat));

function shorthandLocale(short) {
  [d, m, y] = short.split("/");
  return new Date(y, --m, d).toLocaleString();
}

let short = "2/9/2003";
// default shorthand is being converted to MM/DD/YYYY, which is US format
console.log("\nshort locale:", shorthandLocale(short));
