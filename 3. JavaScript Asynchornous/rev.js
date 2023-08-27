// Sync : First A() and then only  -> B()
// Blocking : B can't run without A being completed
// Single Threaded : Can't do multiple tasks at one time

function A() {
  console.log("A");
}

function B() {
  console.log("B");
}

A();
B();

// Set Timeout

const greet = (name) => {
  console.log("Hey Greet", name);
};

const timeoutID = setTimeout(greet, 2000, "Nikhil");
clearTimeout(timeoutID);

const intervalID = setInterval(() => {
  console.log("Hey greet");
}, 2000);

clearInterval(intervalID);

// Callbacks

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetNikhil(greetFn) {
  const name = "Nikhil";
  greetFn(name);
}

greetNikhil(greet);
