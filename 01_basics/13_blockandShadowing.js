/* 
 Block = group of statements combined together 
 Shadowing = When a variable/function shadows the value of the parent scope variable in its scope.
*/

let a = 10;
const b = 10;
{
  a = 20;
  console.log(b); // 10
}
console.log(a); //10;
const account=true;
console.log(typeof account);
