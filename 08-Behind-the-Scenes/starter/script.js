'use strict';

/*
const person = {
  firstName: 'Thong',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);

    // SOLUTION 1
    // isMillenial is a regular function, gets its own THIS keyword
    // inside a reg function call, THIS is undefined
    // must copy parent's THIS keyword to self variable, then call inside
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log('isMillenial: ' + (self.year >= 1981 && self.year <= 1996));
    // };

    // SOLUTION 2
    // arrow function inherit THIS keyword from its parent's scope
    const isMillenial = () => {
      console.log(this);
      console.log('isMillenial: ' + (this.year >= 1981 && this.year <= 1996));
    };

    isMillenial();
  },

  greet: () => {
    // arrow function does not get its own THIS keyword, inheriting global's (parent) THIS keyword
    // NOTE: avoid this by not using ARROW FUNCTIONS as METHODS

    console.log(this); // window object
    console.log(`Hello ${this.firstName}`);
  },
};

person.greet();
person.calcAge();

// ARGUMENTS keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // legal to add more than the specified amount of parameters (function expr only)

// arrow function does not get ARGUMENTS keyword
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
addArrow(2, 5, 8, 12);


 // PRIMITIVES vs OBJECTS
let age = 23;
let oldAge = age;
age = 24;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Thong',
  age: 23,
};
const friend = me; // me and friend are ponting the the same object in heap
friend.age = 30; // this would change me.age to 30 as well

console.log('Me', me);
console.log('Friend', friend);
*/

// primative types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Dang';
console.log(lastName, oldLastName); // (lastName: 'Dang', oldLastName: 'Williams')

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
};
const marriedJessica = jessica; // copying jessica's reference, pointing to the same object
marriedJessica.lastName = 'Dang'; // manipulating jessica's object as well
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// need to assign a new object to marriedJessica

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 23,
};

// Object.assign() only do a shallow copy (first level); does not copy objects inside the object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Dang';

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
