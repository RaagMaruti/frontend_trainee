// default export, named export with alias
import exports, { add as sum, sub } from "./2_exports.js";

console.log(sum(10, 20));
console.log(sub(10, 20));
exports();


// import * as all from "module.js"
// namespace - imports everything

// import "/modules/my-module.js";
// Import an entire module for side effects only, without importing anything. 
// This runs the module's global code, but doesn't actually import any values.
