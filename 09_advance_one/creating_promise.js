const validate = false;
function createOrder() {
  const pr = new Promise((resolve, reject) => {
    if (validate) {
      resolve("Hello");
    } else {
      reject("Yoo");
    }
  });
  return pr;
}
createOrder()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

