// let num1: number = "1";

// let num1 = "1";

// function calc(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calc(num1, 3));

// function getTotal(numbers: Array<number>) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   role: "professor",
// };

// console.log(user.);

// Type Alias

type User = {
  name: string;
  age: number;
  address?: string;
};

const user: User = {
  name: "Nik",
  age: 25,
};

function login(userData: User): User {
  return userData;
}

console.log(login({ name: "J Doe", age: 20 }));

type ID = number;

const userID: ID = 23;
