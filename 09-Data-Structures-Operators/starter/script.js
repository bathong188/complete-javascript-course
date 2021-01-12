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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
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

// // orders do not matter
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // using custom variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // custom names + defaults
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); // menu does not exist, and would be undefined if no default

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////
// SPREAD OPERATOR

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Array(5) [ 1, 2, 7, 8, 9 ]

// using spread operator
// expanding arr array into all of its elements
// usage: when otherwise would use elements separated by commas
const newArr = [1, 2, ...arr];
console.log(newArr);
// Array(5) [ 1, 2, 7, 8, 9 ]
console.log(...newArr);
// 1 2 7 8 9
// same as console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array (shallow)
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const combinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(combinedMenu);

// spread operator works on iterables (including on objects since ES2018)
// iterables: arrays, strings, maps, sets, NOT objects
const str = `Thong`;
const letters = [...str, '', 'L.'];
console.log(letters);
// Array(7) [ "T", "h", "o", "n", "g", "", "L." ]
console.log(...str);
// T h o n g

const ingredients = [
  // prompt("Let's make pasta! Your first ingredient?"),
  // prompt('Second ingredient?'),
  // prompt('And last?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: `Mario`, foundedIn: 1969 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
