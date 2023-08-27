// (function greet() {
//   return "Hello";
// })();

// async function newGreet() {
//   return Promise.reject("Hello from New Greet");
// }

// newGreet()
//   .then((value) => console.log(value))
//   .catch((err) => console.error(`Err ${err}`));

// console.log(newGreet());

async function nGreet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(resolve("Hello from AWAIT"), 3000);
  });

  let result = await promise;

  console.log(result);
}

nGreet();

// Sequential Execution

function resolveHello() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("World");
    }, 1000);
  });
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello);

  const world = await resolveWorld();
  console.log(world);
}

sequentialStart();

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(`${await hello} - Concurrent`);
  console.log(`${await world} - Concurrent`);
}
concurrentStart();
