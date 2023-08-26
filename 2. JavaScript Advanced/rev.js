// Scope

// Block Scope -> Within Curly brace
// Function Scope -> Within a Scope
// Global Scope -> At the top of program

let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// Clousres

// Combination of Function - Bundled together with references to outer state

function out() {
  let counter = 0;
  function inn() {
    counter++;
    console.log(counter);
  }
  return inn;
  // inn()
}

const result = out();
result();
result();

// out()
// out()

// Function Currying

// Transform a function with multiple arguments into a sequence of nesting function
// Currying just transforms a function -> doesn't not call it

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const currySum = curry(sum);
console.log(currySum(2)(3)(5));

// This allows to make reusable functions
function sayName(name) {
  console.log(`My name - ${name}`);
}

sayName("NT");

// Value of this keyword can be determined by the way it is called

// Implicit Binding

// When called with dot notation, this refers to the object

const person = {
  name: "Nik",
  sayName: function () {
    console.log(`My name ${this.name}`);
  },
};

person.sayName();

// Explicit Binding

globalThis.name = "GlobalName";

function sayName() {
  console.log(`${this.name}`);
}

sayName.call(person);

// New Binding

// The new keyword internally creates a new empty object which the 'this' keyword refers to.

function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("NikTan");
console.log(`New Binding ${p1.name}`);

// Default Binding -> FallBack Binding

// This keyword will be set to global scope if none of the rules are matched!

sayName();

// Order : New -> Explicit -> Implicit -> Default

// Concept of Prototype

function Per(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

const per1 = new Per("John", "Doe"); //Constructor Function
const per2 = new Per("Bruce", "Wayne");

// JavaScript - being dynamic - allows us to bind new properties to function at any given time.

per1.getFullName = function () {
  return `${this.fName} .. ${this.lName}`;
};

console.log(per1.getFullName());

// But getFullName is a generic function -> Not specific to per1 and can be extended to per2 as well.
// It's better to leverage prototypes here

Per.prototype.getFullName = function () {
  return `${this.fName} .. ${this.lName}`;
};

console.log(per2.getFullName());

// Prototypal Inheritance

function SuperHero(fName, lName) {
  Per.call(this, fName, lName);

  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fights Crime");
};

SuperHero.prototype = Object.create(Per.prototype);

const batman = new SuperHero("Iron", "Man");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());
