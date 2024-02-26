console.log("Learn Along Objects");

//Create

const obj = Object.create({});
const amit = 10; //unique object or singleton
const o2 = {
  name: "Amit",
  [amit]: 10,
  email: "amitjimiwal@gmail.com",
  isLoggedIn: false,
};
// Object.freeze(o2); //freezes the object. No operations can be performed on the object after this.
o2.add = 10;
a = new Date();
//there are two notations 
console.log(o2.email);
console.log(o2[amit]);

o2.greet=function z(){
     console.log("Hello greet inside the object");
}
console.log(o2);

const userName={
     firstname:'Amit',
     lastName:'Jimiwal'
}
const regular={
     email:'amit@xyz.com',
     fullName:{
          userName,
     }
}
console.log(regular.fullName.userName);

const ob1={1:'a',2:'b'}
const ob2={3:'a',4:'b'}
// const ob3={...ob1,...ob2};
const ob3=Object.assign({},ob1,ob2);
console.log(ob3);

console.log(Object.values(regular.fullName));
console.log(Object.values(regular));
console.log(Object.entries(regular));
console.log(regular.hasOwnProperty('amit'))