/* 
JavaScript cares about the lexical environment when you ask for a variable while running a line of code inside any particular execution context if it can’t find that variable in its block it will go at the outer reference or block and look for variables there.

And that outer reference is where the function sits lexically is its outer environment.

So we can say that whenever a context execution is created along with it a lexical environment is created and each lexical environment have reference to its parent lexical environment which points to its memory allocation.

*/

var i=10;
console.log(i);
{
     console.log(i);
}
function getName(){
     console.log(i);
     c();
     function c(){
          console.log(i);
     }
}
getName();