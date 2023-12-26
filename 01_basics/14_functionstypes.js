//FUNCTION STATEMENT or function declaration
function statement(){
     console.log("This is a function statement");
}

//function expression
let a=function(){
     console.log("This is a function expression");
}


//anonymous function
// function(){

// }

//named function expression
let asliName=function name(){
     console.log("Named function Expression");
}

//First class functions - ability of functions in javascript to be passed as parameters or returned from Javascript

function outer(param){
     return function inner(){
          param();
     }
}
console.log(outer(function(){
     console.log("Badiya hu bhai");
})());


 