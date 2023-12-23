console.log("Working");

/*
Closures - A function binned along with its lexical Environment(Scope);
*/

function account() {
  var id = 1;
  function getId() {
    console.log(id);
  }
  getId(); //lexical scoping like example
}
account();

function accountName() {
  var name = "Amit Jimiwal";
  function getName() {
    console.log(name);
    return "Done Hai Bhai";
  }
  return getName;
}

const name = accountName(); //after this execution, the context of this function gets removed from the call stack
console.log(name()); // this name function still has access to the variable name as every function in javascript has a closure that is function + its lexical environment.

//Ques- print 1 to 5 after 1 sec 
function x(){
     for (let id = 1; id <=5; id++) {
          setTimeout(() => {
               console.log(id);
          }, id*1000);
     }
}
x();
