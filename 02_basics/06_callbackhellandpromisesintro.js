const cart=["apple","mango","keyboard","mouse"];

createOrder(cart); //async operation that returns orderID
proceedToPayment(orderId); //async operation that  returns paymentID using OrderID

//using callbacks
//problems - inversion of control , trust issue (hell)
createOrder(cart,function(){
  proceedToPayment(orderId)
})

const promise=createOrder(cart); 

promise.then(function(orderID){
  proceedToPayment(orderID);
})


const userdata=fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com');
console.log(userdata)

//chaining promise
promise.then(function(orderID){
  return proceedToPayment(orderID);
}).then(function(paymentInfo){
  return showOrderSummary(paymentInfo);
})
