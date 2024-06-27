console.log("promises");
/*
A promise is a object that used to represent the eventual completion or failure of an asynchronous operation.

Relating it with proxy - MDN Docs

2.2) A promise has 3 states: pending | fulfilled | rejected.
2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
2.4) A promise resolves only once and it is immutable.
2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
Promises is an immutable Object
*/
const cart = ["mouse", "pants", "keyboard"];
let wallet = 1000;
//promise chaining
createOrder(cart)
  .then((orderId) => {
    console.log(orderId.toFixed(4));
    return orderId;
  })
  .catch((err) => {
    //catch for createOrder
    console.log(err);
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((payment) => updateWallet(payment))
  .then((session) => showOrderSummary(session))
  .then((summary) => {
    console.log("Summary: " + summary);
  })
  .catch((err) => {
    //catch for all the three payment methods
    console.log(err);
  })
  .finally(() => {
    console.log(
      "I will run everytime once the whole ecommerce process complete"
    );
  });

//creating a promise producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (cart.length === 0) {
      const err = new Error("Cart is Empty");
      // console.log(err);
      reject(err);
    }
    const orderId = Math.random() * 1000;
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}
function proceedToPayment(orderID) {
  //It'll be an async operation first we'll generate a session for the payment
  return new Promise((resolve, reject) => {
    if (orderID) {
      const session = 500;
      resolve(session);
    }
    reject("Invalid Order Id");
  });
}
function showOrderSummary(session) {
  return new Promise((resolve, reject) => {
    if (session) {
      console.log;
      resolve({
        balance: session,
        Paymentmode: "Promise",
        name: "Jimmy",
      });
    }
    reject("Invalid Session for payment");
  });
}
function updateWallet(payment) {
  return new Promise((resolve, reject) => {
    if (payment) {
      wallet -= payment;
      resolve(`Your wallet balance is ${wallet}`);
    }
    reject("Invalid Payment");
  });
}
