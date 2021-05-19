'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  // computed property name
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterChoice, mainChoice) {
    return [this.starterMenu[starterChoice], this.mainMenu[mainChoice]];
  },

  orderDelivery(obj) {
    console.log(obj);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

  // ES6 enhanced object literals
  openingHours,
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

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// // Array(5) [ 1, 2, 7, 8, 9 ]

// // using spread operator
// // expanding arr array into all of its elements
// // usage: when otherwise would use elements separated by commas
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// // Array(5) [ 1, 2, 7, 8, 9 ]
// console.log(...newArr);
// // 1 2 7 8 9
// // same as console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array (shallow)
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const combinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(combinedMenu);

// // spread operator works on iterables (including on objects since ES2018)
// // iterables: arrays, strings, maps, sets, NOT objects
// const str = `Thong`;
// const letters = [...str, '', 'L.'];
// console.log(letters);
// // Array(7) [ "T", "h", "o", "n", "g", "", "L." ]
// console.log(...str);
// // T h o n g

// const ingredients = [
//   // prompt("Let's make pasta! Your first ingredient?"),
//   // prompt('Second ingredient?'),
//   // prompt('And last?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: `Mario`, foundedIn: 1969 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//////////////////////////////////////////////
// REST PATTERN

// // This is SPREAD because ... is on the RIGHT of equal (=) sign
// const arr = [1, 2, ...[3, 4]];

// // This is REST because ... is on the LEFT of equal (=) sign
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 Array(3) [ 3, 4, 5 ]

// // The REST element must be the LAST element
// const [pizza /*skipped*/, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// console.log(pizza, risotto, otherFood);

// // Objects
// console.log(restaurant.openingHours);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// // REST parameters
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); // pack using SPREAD

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//////////////////////////////////////////////
// Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting

// // OR operator
// console.log('---- OR ----');
// console.log(3 || 'Mocha');
// console.log('' || 'Mocha');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Henlo' || 23 || null);
// // 'Henlo' is the first truthy value --> shortcircuit and printed

// const guestList1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guestList1);

// const guestList2 = restaurant.numGuests || 10;
// console.log(guestList2);

// // AND operator
// console.log('---- AND ----');
// console.log(0 && 'Milk');
// console.log(7 && 'Milk');

// console.log('Hello' && 23 && null && 'Milk');
// // null is the first falsy value --> shortcircuit and returned

// if (restaurant.orderPizza) {
//   // check if oderPizza() exists
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // alternative
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//////////////////////////////////////////////
// Nullish Coalescing Operator ??

// // nullish: null and undefined (NOT 0 or '')
// const guests = restaurant.numGuests ?? 10;

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // *****
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // const { team1, draw, team2 } = game.odds;
// // destructuring
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`Number of goals scored in total: ${players.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // *****
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// // if true, evaluation continues to print statement
// team1 < team2 && console.log(`Team 1 is more likely  to win.`);
// team1 > team2 && console.log(`Team 2 is more likely  to win.`);

///////////////////////////////////////
// The for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item); // each item of entries() is an array
// }
// console.log([...menu.entries()]);

// console.log(`Menu:`);
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // like above but utilize destructuring
// for (const [idx, elem] of menu.entries()) {
//   console.log(`${idx + 1}: ${elem}`);
// }

///////////////////////////////////////
// Optional Chaining (?.)

// // checking if this object exists
// // can be cumbersome for deeply nested objects
// if (restaurant && restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // same but use OPTIONAL CHAINING
// // only if properties before (?) exist, continue; else return undefined
// console.log(restaurant.openingHours.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods, optional  chaining
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.bruhbruhbruh?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Thong', email: 'bru@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
