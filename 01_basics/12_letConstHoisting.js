/* 
let and const variables are not allocated memory in the Global Memory space/window . They are allocated separate memory block.(Script) in the Memory Component itself.
They are also hoisted i.e, allocated memory before execution of first line.
but they are in Temporal Dead Zone due to which they can't be accessed until they are initialized.

Temporal Dead Zone- The temporal Dead zone is the duration between the memory allocation and the initialization of let and const in the separate memory space 
*/
console.log(this.empCity); // undefined
console.log(empName); //error
console.log(empCity); //undefined
let empName="Jimiwal";
var empCity="Delhi";
console.log(this.empCity); //Delhi