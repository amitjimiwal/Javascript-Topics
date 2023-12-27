//FUNCTION STATEMENT or function declaration
function statement() {
  console.log("This is a function statement");
}

//function expression
let a = function () {
  console.log("This is a function expression");
};

//anonymous function
// function(){

// }

//named function expression
let asliName = function name() {
  console.log("Named function Expression");
};


//First class functions - ability of functions in javascript to be passed as parameters or returned from Javascript.
// When functions in a programming language are treated like any other variable then that programming language is known to have first-class functions. In javascript, the functions are known as the first-class citizens, which means functions can do what any other variables can. First-class functions javascript get this ability by treating the functions as an object.

function outer(param) {
  return function inner() {
    param();
  };
}
console.log(
  outer(function () {
    console.log("Badiya hu bhai");
  })()
);

//IIFE Immediately Invoked function expression

(function IIFE() {
  console.log("I am IIFE");
})();

function outerIIFE() {
  console.log("Outer called");
  (function IIFE() {
    console.log("I am IIFE");
  })();
}
outerIIFE();
