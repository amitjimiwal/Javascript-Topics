//HOF= higher order functions= are the functions that either take a function as an argument or returns another function from its call.

function hof() {
  return function b() {
    return 5;
  };
}

const hof2 = (a) => {
  a();
};

function nothof() {
  console.log("Amit");
}
const a = hof();
console.log(a());
hof2(nothof);

//functional programming examples

const radius = [1, 2, 3];
//calculate the area of all the circles;
const area = (radius) => {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(Number((Math.PI * radius[i] * radius[i]).toFixed(5)));
  }
  return result;
};
console.log(area(radius));
function calCircumference(radius) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(Number((2 * Math.PI * radius[i]).toFixed(5)));
  }
  return result;
}

console.log(calCircumference(radius));
//Optimised way of doing above three things is making a Generic function
console.log("Abstraction and Functional Programming Results ");
function areaFormula(r) {
  return Math.PI * r * r;
}
function circumFormula(r) {
  return 2 * Math.PI * r;
}
function diameterFormula(r) {
  return 2 * r;
}
function calculate(radius, operation) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(Number(operation(radius[i]).toFixed(5)));
  }
  return result;
}
console.log(calculate(radius, areaFormula));
console.log(calculate(radius, diameterFormula));
console.log(calculate(radius, circumFormula));
