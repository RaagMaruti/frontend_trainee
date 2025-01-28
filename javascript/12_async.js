setTimeout(() => {
  console.log("callback 2");
}, 1000);
console.log("callback 1");

async function getData() {
  try {
    const result = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log(`Promise - settled: ${result.status}`);
  } catch (err) {
    console.log(err);
  }
}

getData();
console.log("Promise - pending");

const one1 = () => Promise.resolve("hello world");

async function myFunc() {
  console.log("1");
  // only put into micro task queue when an "await" is encountered
  const res = await one1();
  console.log(res);
  console.log("4");
}

function myFunc1() {
  console.log("5");
  one1().then((res) => {
    console.log(res);
  });
  console.log("6");
}

console.log("2");
myFunc();
myFunc1();
console.log("3");
