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

const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message);
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
let Student = { //Object Literal
name : "David Rayy",
sclass : "VI",
rollno : 12 };

const properties=Object.keys(Student);
console.log(properties.join(','));

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
var s = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Object.freeze(s); -- freezes the object

delete s.rollno;
console.log(s)

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
console.log(Object.keys(s).length);

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (const elem of library) {
  if(elem.readingStatus) console.log(`Already read ${elem.title} by ${elem.author}`);
  else console.log(`You still have to read ${elem.title} by ${elem.author}`);
}

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}
console.log(new Cylinder(5,7));

Cylinder.prototype.volume=function(){
  let r=this.cyl_diameter/2;
  return (Math.PI * Math.pow(r,2) *this.cyl_height).toFixed(4);
};
console.log(new Cylinder(3,4).volume());