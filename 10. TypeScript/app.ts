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

interface Book {
  name: string;
  price: number;
}

interface EBook {
  name: string;
  price: number;
  fileSize: number;
  format: string;
}

interface AudioBook {
  name: string;
  price: number;
  fileSize: number;
  format: string;
  duration: number;
}

const book: Book = {
  name: "Shoe Dog",
  price: 25,
};

const ebook: EBook = {
  name: "Atomic Habits",
  price: 25,
  fileSize: 300,
  format: "pdf",
};

const audioBook: AudioBook = {
  name: "Atomic Habits",
  price: 25,
  fileSize: 300,
  format: "pdf",
  duration: 5,
};
