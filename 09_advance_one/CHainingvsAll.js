/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
function calculateTime() {
  return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
}
calculateTime().then((res) => {
  let time = 0;
  for (let i of res) {
    time = Math.max(time, i);
  }
  console.log(time);
});
function waitOneSecond() {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  return pr;
}

function waitTwoSecond() {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
  return pr;
}

function waitThreeSecond() {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
  return pr;
}

/*
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function calculateTime() {
  let time = 0;
  waitOneSecond()
    .then((res) => {
      time += res;
      return waitTwoSecond();
    })
    .then((res) => {
      time += res;
      return waitThreeSecond();
    })
    .then((res) => {
      time += res;
    })
    .finally(() => {
      console.log("total time taken " + time);
    });
}

/* 
Promise.all() takes 3 seconds to resolve all the promises
while chaining the promises took 6secodns
Sp, whenever you have multiple promises running in chain you can optimise it with Promise.all()
*/