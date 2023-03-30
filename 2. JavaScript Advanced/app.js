// 1. Nested Functions

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }

// outer();

//2. Closure

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }

// const fn = outer();
// fn();
// fn();

//3. Currying

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);

// console.log(add5);

//4. Implicit Binding

// const person = {
//   name: "Nikhil",
//   sayMyName: function () {
//     console.log(`Name : ${this.name}`);
//   },
// };

// person.sayMyName();

// const person = {
//   name: "Nikhil",
// };

// function sayMyName() {
//   console.log(`Name : ${this.name}`);
// }

// sayMyName.call(person);

//New Binding

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Nik");
// console.log(p1.name);

//Global Binding

// globalThis.name = "NikTan";
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// sayMyName();

//Prototype

// function Person(fname, lname) {
//   this.firstName = fname;
//   this.lastName = lname;
// }

// const person1 = new Person("Nik1", "Tan1");
// const person2 = new Person("Nik2", "Tan2");

// person1.getFullName = function () {
//   return `${this.firstName} and ${this.lastName}`;
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} and ${this.lastName}`;
// };

// console.log(person1.getFullName());
// console.log(person2.getFullName());

//Prototypal Inheritance

// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} : ${this.lastName}`;
// };

// Superhero.prototype.constructor = Superhero;

// function Superhero(fName, lName) {
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// Superhero.prototype.fightsCrime = function () {
//   console.log("Superhero Fights Crime!");
// };

// Superhero.prototype = Object.create(Person.prototype);

// const batman = new Superhero("Bruce", "Wayne");
// console.log(batman.getFullName());

// Class

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   sayMyName() {
//     return `${this.firstName} with ${this.lastName}`;
//   }
// }

// const personP1 = new Person("A", "B");
// console.log(personP1.sayMyName());

// class Superhero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperHero = true;
//   }

//   fightsCrime() {
//     console.log("Superhero Fights Crime!");
//   }
// }

// const batman = new Superhero("Bruce", "Wayne");
// console.log(batman.sayMyName());

// Iterable and Iterators

//String
// const myStr = "Nikhil";
// for (const character of myStr) {
//   console.log(character);
// }

//Array
// const myArr = [1, 2, 3, 4, 5];
// for (const value of myArr) {
//   console.log(value);
// }

// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step == 1) {
//           return { value: "Hey", done: false };
//         } else if (step == 2) {
//           return { value: "There", done: false };
//         }
//         return { value: "There", done: true };
//       },
//     };
//     return iterator;
//   },
// };

// for (const word of obj) {
//   console.log(word);
// }

// Generator Function

function* generatorFunction() {
  yield "Hey";
  yield "There";
}

const generatorObject = generatorFunction();

for (const word of generatorObject) {
  console.log(word);
}
