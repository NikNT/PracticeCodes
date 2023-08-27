// Promise

const onFulfillment = (res) => {
  console.log(res);
  console.log("Set up table");
};

const onRejection = (err) => {
  console.log(err);
  console.log("Cook Pasta");
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bringing Tacos");
  }, 500);
})
  .then(onFulfillment)
  .catch(onRejection);

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.error(`Error ${err}`));
