// Scope

// Block Scope -> Within Curly brace 
// Function Scope -> Within a Scope 
// Global Scope -> At the top of program

let a = 10; 
function outer(){
    let b = 20
    function inner(){
        let c = 30;
        console.log(a,b,c)
    }
    inner()
}
outer(); 


// Clousres 

// Combination of Function - Bundled together with references to outer state 

function out(){
    let counter = 0;
    function inn (){
        counter++;
        console.log(counter)
    }
    return inn;
    // inn()
}

const result = out()
result()
result()

// out()
// out()

// Function Currying 

// Transform a function with multiple arguments into a sequence of nesting function 
// Currying just transforms a function -> doesn't not call it

function sum(a, b, c){
    return a + b + c;
}
console.log(sum(2,3,5));

function curry(fn){
    return function (a){
        return function(b){
            return function(c){
                return fn(a,b,c,);
            }
        }
    }
}

const currySum = curry(sum)
console.log(currySum(2)(3)(5))

// This allows to make reusable functions 

