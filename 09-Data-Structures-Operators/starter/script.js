'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterChoice, mainChoice) {
    return [this.starterMenu[starterChoice], this.mainMenu[mainChoice]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*
/////////////////////////////////////////////
// ARRAY DESTRUCTURING

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// java swap variables
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// big brain swap
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 1);
console.log(starterCourse, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // (2 5 6)

// default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // (8 9 undefined), undefined if unspecified

const [l = -1, m = -1, n = -1] = [8, 9];
console.log(l, m, n); // (8 9 -1), setting defaults to -1
*/

//////////////////////////////////////////////
// OBJECT DESTRUCTURING

// orders do not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// using custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// custom names + defaults
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu does not exist, and would be undefined if no default

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
