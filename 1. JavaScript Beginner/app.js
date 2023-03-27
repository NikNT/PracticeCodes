// // //Implicit Conversion

// // console.log(2 + "3");
// // //23

// // console.log(true + "3");
// // //true3

// // console.log("4" - "2");
// // //2

// // console.log("4" * "2");
// // //8

// // console.log("4" / "2");
// // //2

// // console.log("Bruce" - "Wayne");
// // //Nan

// // //False - 0 and True - 1

// // console.log("5" - false);
// // //5

// // console.log("5" - true);
// // //4

// // console.log("5" - null);
// // //5

// // console.log(5 + undefined);
// // //NaN

// //Explicit Conversion

// console.log(Number("5"));
// //5

// console.log(Number(false));
// //0

// console.log(Number(""));
// //0

// console.log(parseInt("3.14"));
// //3

// console.log(parseFloat("3.14"));
// //3.14

// console.log(String(500));
// //500

// console.log((500).toString());
// //500
// // Does Not Work on Null and Undefined

// console.log(Boolean(10));
// //true

// // null - undefined - NaN - '' - 0 : All give False when converted to Boolean type.
// //Everything Else - Returns True

// //Equality
// const var1 = false;
// const var2 = "";

// console.log(var1 == var2);
// console.log(var1 === var2);

//Conditional Statement

// const num = 5;
// if (num > 0) {
//   console.log("Positive Number");
// } else if ((num = 5)) {
//   console.log("Number = 5");
// } else {
//   console.log("Negative Number");
// }

//switch

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("Color is Red!");
//     break;
//   case "blue":
//     console.log("Color is Blue!");
//     break;
//   default:
//     console.log("Unknown Color");
// }

// Looping Code

//for
// for (let i = 0; i < 10; i++) {
//   console.log(`Value is ${i}`);
// }

//while
// let i = 1;
// while (i < 10) {
//   console.log(`Value is ${i}`);
//   i++;
// }

//do-while
// let i = 0;
// do {
//   console.log(`Value is ${i}`);
//   i++;
// } while (i < 10);

//for .. of

// const numArray = [1, 2, 3, 4, 5];
// for (const number of numArray) {
//   console.log(numArray[number - 1]);
// }

//Functions
// function greet(username) {
//   console.log(`Hey ${username}`);
// }

// greet("Bruce");
// greet("Diana");
// greet("Clark");

// const greet = (usrnm) => `Hey ${usrnm}`;
// console.log(greet("Nik"));

if (true) {
  const myName = "Nik";
}

console.log(myName);
