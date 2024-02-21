//map , filter and reduce are three important Higher Order Functions of Javascript.
const arr = [1, 2, 5, 7, 89];
//map- used to transform a given array into a new array from given array elements

const o1 = arr.map(function (item) {
  return item + 1;
});
const o2 = arr.map(function (item) {
  return item / 2;
});

console.log(o2);

//filter - used to filter out some values from an array based on some condition

const o3 = arr.filter(function (value) {
  return value < 6;
});
console.log(o3);

//reduce- It's used to get some values from an array like sum , multiplication in any form etc.

//sum of elements of an array into an object
const o4 = arr.reduce(
  function (acc, curr) {
    acc.sum += curr;
    return acc;
  },
  {
    sum: 0,
  }
);
console.log(o4);

//maximum value of the array
let max = Number.MIN_VALUE;
for (const iterator of arr) {
  if (iterator > max) {
    max = iterator;
  }
}

//using reduce
const o6 = arr.reduce((max, iterator) => {
  if (max < iterator) return iterator;
  return max;
}, Number.MIN_VALUE);

console.log(o6);

/* 
ADVANCE QUESTIONS
*/
const users = [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    age: 50,
  },
  {
    id: 2,
    firstName: "Amit",
    lastName: "Jimiwal",
    age: 20,
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    age: 20,
  },
  {
    id: 4,
    firstName: "Maddie",
    lastName: "Hamilton",
    age: 20,
  },
];

//list with full names
const ou1 = users.map(function (user) {
  return `${user.firstName} ${user.lastName}`;
});
console.log(ou1);

//list how many users are of a particular age
// { 50:1 , 20:1 , 34:1 }

const ou2 = users.reduce(function (acc, user) {
  if (acc.hasOwnProperty(user.age)) {
    acc[user.age]++;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});

console.log(ou2);

//firstname of all the users whose age is less than 30

const ou3 = users
  .filter(function (user) {
    return user.age > 30;
  })
  .map(function (user) {
    return user.firstName;
  });

console.log(ou3);
