// const firstFunction = () => {
//   console.log("First Function");
// };

// const secondFunction = () => {
//   console.log("Second Function");
// };

// firstFunction();
// secondFunction();

// const greet = () => {
//   console.log("Hey There!");
// };

// setTimeout(greet, 2000);

// const greet = (name) => {
//   console.log(`Hey ${name}`);
// };

// const executeFun = setTimeout(greet, 2000, "Nikhil");
// clearTimeout(executeFun);

// const greet = (name) => {
//   console.log(`Hey ${name}`);
// };

// const myGreet = setInterval(greet, 2000, "Nik");
// clearInterval(myGreet);

// setTimeout(
//   (myFun = () => {
//     console.log("Hello");
//     setTimeout(myFun, 1000);
//   }),
//   1000
// );

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function greetNik(greet) {
//   const name = "Nikhil";
//   greet(name);
// }

// greetNik(greet);

// Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Bringing Tacos");
//   }, 5000);
// });

// const onFullfilment = (result) => {
//   console.log(result);
//   console.log("Setup Table!");
// };

// const onReject = (error) => {
//   console.log(error);
//   console.log("Cook Pasta");
// };

// promise.then(onFullfilment);
// promise.catch(onReject);

// async function greet() {
//   return "Hello";
// }

// greet().then((data) => console.log(data));

// async function greet() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// greet();

// Sequential Exeuction

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}

// async function sequential() {
//   const hello = await resolveHello();
//   const world = await resolveWorld();

//   console.log(hello);
//   console.log(world);
// }

// sequential();

function parallel() {
  Promise.all([
    async () => console.log(await resolveHello())(),
    async () => console.log(await resolveWorld())(),
  ]);
}

parallel();
