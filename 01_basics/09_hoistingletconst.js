/*  
Hoisting - It's a phenomenon in Javascript where you can access the variables and functions even before they are actucally declared in the program
*/

//var variables are hoisted and are declared with undefined keyword
// but the variables declared with let are const are hoisted but they are not initialized so as such you can't access them before they're declared
// Refer this https://www.freecodecamp.org/news/javascript-let-and-const-hoisting

console.table([b,z]); //ReferenceError: Cannot access 'b','z' before initialization
let b=10;
const z=1;



console.log(a); // undefined 
var a = 10;
