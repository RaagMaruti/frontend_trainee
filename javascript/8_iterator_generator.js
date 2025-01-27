const pages = {
  1: ["para-1", "para-2", "para-3"],
  2: ["para-4", "para-5", "para-6"],
  3: ["para-7", "para-8"],
};

function myIterator() {
  let pageNum = 0;
  let done = false;
  let data = null;

  return {
    next() {
      data = pages[++pageNum];
      if (data == undefined) {
        done = true;
      }
      return {
        count: pageNum,
        value: data,
        done: done,
      };
    },
  };
}

const iterator = myIterator();
let result = iterator.next();
while (!result.done) {
  console.log(result.count + ", " + result.value);
  result = iterator.next();
}
console.log();

function* myGenerator() {
  let pageNum = 0;
  let done = false;
  let data = null;

  while (true) {
    data = pages[++pageNum];
    if (data == undefined) {
      done = true;
      return;
    }
    yield data;
  }
}

const generator = myGenerator();
for (let gen of generator) {
  console.log(gen);
}

// Feature	              Generator	                                                      Regular Iterator
// State Management	      Internal state is maintained automatically by the generator.	  Requires manual state management (e.g., using a counter).
// Pause/Resume	          Can pause and resume function execution using yield.	          Cannot pause execution; it processes all values at once.
// Simplicity	            Easier to implement, especially for custom iterations.	        Can be more complex if iteration needs to handle state.
// Memory Efficiency	    Useful for lazy evaluation; generates values on-demand.	        Typically returns all values at once, may not be as memory-efficient.
