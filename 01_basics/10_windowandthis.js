//window is the global object that is created with the global execution Context. It is an Object containing all the variables and functions in the global space
let rollNo=10;
var name="Amit";
const enrollNo=40;
console.log(this.rollNo); //undefined
console.log(this.name); //Amit
console.log(enrollNo); //40
/*
let and const variables are not present in the window Object. they are defined on global scope or local scope to the scope where they're declared.
So, it can't be accessed through this or window keyword anywhere in the program.
*/
{
     var name1="Shivansh";
}
function test(){
     var testVat=10;
     let test2="Amit";
     console.log(this.name1);
}
test();