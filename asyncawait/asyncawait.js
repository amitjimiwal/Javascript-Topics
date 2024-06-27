console.log("Async Await ");
/*
async is a keyword that is used with function in order to make asynchronous 
 => An async function will always return a promise
*/
// async function getAdmin() {
//   //   return 2; //return 2 wrapped in a Promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 5000);
//   });
// }
// getAdmin()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/*
async is a keyword that can only be used inside an async function
 => It's used in front od the Promise
 => It resolves the promise and return the data back
 => If the promise gets rejected, then it'll throw an error that should be handled using try/catch or .catch()
*/

const p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved the Promise");
    }, 30000);
  });
};

const p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved the Promise");
    }, 40000);
  });
};

//Handling Promises the new way
async function getData() {
  //JS engine will wait for this promise to be resolved and moves to the next line only when it gets resolved
  //The function will be moved out of the call stack when await occurs as It'll block the main thread
  //When the await promise gets resolved then the function is again moved to the call stack (Event Loop => Microtask Queue)
  //and start execution from the point where it left
  const data = await p1();
  console.log("Execution Completed");
  console.log(data);
  const data2 = await p2();
  console.log("Again complete Execution");
  console.log(data);
}

//Handling the promises old way
// function getData() {
//   p1.then((res) => console.log(res));
//This line will get executed directly as soon as the function gets called as above is an asynchronous task and will be moved out of the stack immediately.
//   console.log("Execution Completed");
// }
getData();
console.log("END");
