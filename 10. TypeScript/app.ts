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

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };

// const user: User = {
//   name: "Nik",
//   age: 25,
// };

// function login(userData: User): User {
//   return userData;
// }

// console.log(login({ name: "J Doe", age: 20 }));

// type ID = number;

// const userID: ID = 23;

//Interfaces

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transaction: Transaction[];
// }

// const transaction1: Transaction = {
//   payeeAccountNumber: 1234,
//   payerAccountNumber: 4567,
// };

// const transaction2: Transaction = {
//   payeeAccountNumber: 1234,
//   payerAccountNumber: 5678,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: "Nik",
//   balance: 5000,
//   isActive: true,
//   transaction: [transaction1, transaction2 ],
// };

// Extend Interfaces

// interface Book {
//   name: string;
//   price: number;
// }

// interface EBook extends Book {
//   fileSize: number;
//   format: string;
// }

// interface AudioBook extends EBook {
//   duration: number;
// }

// const book: Book = {
//   name: "Shoe Dog",
//   price: 25,
// };

// const ebook: EBook = {
//   name: "Atomic Habits",
//   price: 25,
//   fileSize: 300,
//   format: "pdf",
// };

// const audioBook: AudioBook = {
//   name: "Atomic Habits",
//   price: 25,
//   fileSize: 300,
//   format: "pdf",
//   duration: 5,
// };

// interface Book {
//   name: string;
//   price: number;
// }

// interface Book {
//   size: number;
// }

// const book: Book = {
//   name: "Atomic Habit",
//   price: 34,
//   size: 250,
// };

// type SanitizedStrings = string;
// type EvenNumber = number;

// Unions

// type ID = number | string;

//Narrowing

// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// printId(1);
// printId("hello");

// function getFirstThree(x: string | number[]) {
//   return x.slice(0, 3);
// }

// console.log(getFirstThree("hello"));
// console.log(getFirstThree([0, 1, 2, 3, 4, 5, 6]));

// Generics

function logString(arg: string) {
  console.log(arg);
  return arg;
}

function logNumber(arg: number) {
  console.log(arg);
  return arg;
}

function logArray(arg: any[]) {
  console.log(arg);
  return arg;
}

function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logString("String");
logNumber(7);
logArray([4, 3]);
logAnything([4, 3]);

interface HasAge {
  age: number;
}

interface Player {
  name: string;
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

const players: Player[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 16 },
];

getOldest(people);
getOldest(players);

// Assertion - Not a good approach

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const person = getOldest(players);
person.name;

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

// const fetchUserData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`http://example.com${path}`);
//   return response.json();
// };

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

(async () => {
  // const posts = await fetchPostData('/posts');
  // const users = await fetchUserData('/users');
  const users = await fetchData<IUser[]>("/users");
  const posts = await fetchData<IPost[]>("/users");
})();
