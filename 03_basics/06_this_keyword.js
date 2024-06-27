"use strict";
//this in global scope
console.log(this);

//this in global scope
function a() {
  console.log(this);
}
a();
window.a();

// this inside an object
const sum = {
  a: 10,
  b: 10,
  s: function () {
    console.log(this.a + this.b);
  },
};
sum.s();

//some important functions for this keyword- call , apply,bind
const student1 = {
  name: "Amit",
  printName: function () {
    console.log(this.name);
  },
};
student1.printName();

const student2 = {
  name: "Kanika",
};
student1.printName.call(student2);

//this inside arrow functions
const getRank = () => {
  console.log(this);
};
getRank();

function outer() {
  const getRank = () => {
    console.log(this);
  };
  getRank();
}
outer();

const diff1 = {
  a: 10,
  b: 10,
  s: () => {
    console.log(this);
  },
};
diff1.s(); //enclosing lexical scope of the object => global object/window

const diff = {
  a: 10,
  b: 10,
  s: function () {
    //IIFE
    (() => {
      console.log(this);
    })();
  },
};
diff.s(); // enclosing lexical scope of the function i.e, the object diff

//this inside DOM elements
/* 
this will refer to the reference to the button element
*/

// this in Javascript Classes
/*
this will refer to the class in which is it used
*/

class A {
  a = 10;
  print() {
    console.log(this.a);
  }
}
new A().print();
