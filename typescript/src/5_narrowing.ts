function printAll(strs: string | string[] | null) {
  // first part of if is to check whether strings[] is null or not
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// narrowing is basically checking such identity or membership or equality cases, on top of normal types
// assign never after checking all cases
