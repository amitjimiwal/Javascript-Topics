// Callback function- function passed as an argument to another function
function sayHello() {
  return "Hello";
}
function greet(greeting, name) {
  console.log(greeting(), name);
}
greet(sayHello, "John");

//Blocking the main thread - we are waiting for an operation to get completed before we can move on to the next line of code, so our main thread i.e, the call stack is blocked for further execution until the operation is completed.
//That's why we use asynchronous programming to avoid blocking the main thread that is being handled by the event loop.

setTimeout(() => {
  console.log("I am an asynchronous function");
}, 5000);
const a = 10;
const btn=document.querySelector("#click");
function ClickCount() {
  let clicked = 0;
  btn.addEventListener("click", function () {
    clicked++;
    console.log(`Button clicked ${clicked} times`);
  });
}
ClickCount();
document
  .getElementsByClassName("ok")[0]
  .addEventListener("mouseover", function () {
    console.log("Mouseover event fired");
  });
