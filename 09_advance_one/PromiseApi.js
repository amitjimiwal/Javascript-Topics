console.log("Promise Api");
/* 
 There are 4 major Promise API

 Promise.all()
 Promise.allSettled()
 Promise.race()
 Promise.any()

 All of these takes an iterable sequence / array of promises and executes them parallel.
 They are generally used for parallel execution of multiple api calls together
 */

function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 resolved after 4s");
    }, 4000);
    // setTimeout(() => {
    //   reject("P1 rejected after 4s");
    // }, 4000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 Resolved after 3s");
    }, 3000);
    // setTimeout(() => {
    //   reject("P2 rejected after 2s");
    // }, 2000);
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // alert("Hello");
      resolve("P3 resolve after 5s");
    }, 3000);
    // setTimeout(() => {
    //   reject("P3 resolved after 4s");
    // }, 5000);
  });
}

// Promise.all([p1(), p2(), p3()])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// If all fulfilled then returns an array of response of each individual promise in the sequence it is given
//If any of the promises rejected then returns an err for that promise only, all the other promises will run as it is but we can not get their result

//Settled Promise = fulfilled | Rejected;
// Promise.allSettled([p1(), p2(), p3()]).then((res) => console.log(res))
  // .catch((err) => console.log(err));
  // Give the resultant array after the settlement of each promise. General Response
  //Extension to Promise.all
[
  ({
    status: "fulfilled",
    value: "P1 resolved after 4s",
  },
  {
    status: "fulfilled",
    value: "P2 Resolved after 3s",
  },
  {
    status: "fulfilled",
    value: "P3 resolve after 5s",
  })
];

//Promise.race() - Race for first Settlement
// Promise.race([p1(),p3(),p2()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
// Gives the first Settled Promise as it's response if fullfilled => .then handler || if rejected =? .catch handler
//If any of the two promises are settled same time => then the promise who is first in relative order will be the resultant


//Extension of race => Only first fullfilled Promise will be the output
Promise.any([p1(),p2(),p3()])
  .then((res) => {
    console.log(res);
  })
  // .catch((err) => console.log(err));
