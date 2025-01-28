function fetchData1() {
  return new Promise((resolve) => {
    resolve("Data 1 fetched");
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    resolve("Data 2 fetched");
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    // resolve("Data 3 fetched");
    // reject("cannot fetch 3");
  });
}

const promise1 = new Promise((resolve) => {
  resolve("Promise 1 resolved");
});

promise1
  .then((result) => {
    console.log(result);
    return fetchData1();
  })
  .then((data) => {
    console.log(data);
    return fetchData2();
  })
  .then((data) => {
    console.log(data);
    return fetchData3();
  })
  .catch((error) => {
    console.error("\nCaught error:", error);
  });

Promise.all([fetchData1(), fetchData2()])
  .then((results) => {
    console.log("\nAll promises resolved:", results);
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });

Promise.race([fetchData1(), fetchData2(), fetchData3()])
  .then((result) => {
    console.log("\nFirst resolved promise:", result);
  })
  .catch((error) => {
    console.error("First rejected promise:", error);
  });

Promise.allSettled([fetchData1(), fetchData2()]).then((results) => {
  console.log("Results of all promises:");
  // for each callbacks are not put into task queues, they are not for browser APIs, hence they are synchronous
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failure:", result.reason);
    }
  });
});

async function fetchData() {
  console.log("Async/Await");
  try {
    const result1 = await fetchData1();
    console.log(result1, "async"); // Output: Data 1 fetched
    const result2 = await fetchData2();
    console.log(result2, "async"); // Output: Data 2 fetched
    const result3 = await fetchData3();
    console.log(result3, "async");
  } catch (error) {
    console.error("Error in async/await:", error); // Handling errors from any promise
  }
}

console.log("First\n");
fetchData();
