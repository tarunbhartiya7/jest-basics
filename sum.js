function sum(a, b) {
  return a + b;
}

function isValid(num) {
  if (typeof num !== "number") {
    throw new Error("Invalid input!");
  }
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Sam", age: 25 });
    }, 100);
  });
}

function fetchData(cb) {
  setTimeout(() => {
    cb({ name: "Sam", age: 25 });
  }, 200);
}

module.exports = {
  sum,
  isValid,
  getData,
  fetchData,
};
