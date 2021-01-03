'use strict';

// // catches undeclared variable
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// // catches reserved words
// // const interface = 'Audio';

// function logger() {
//     console.log(`My name is T`);
// }

// // calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(6, 9));




// // using function declaration
// function calcAge1(birthYear) {
//     return 2077 - birthYear;
// }

// const age1 = calcAge1(1998);
// console.log(age1);

// // using function expression
// const calcAge2 = function (birthYear) {
//     return 2077 - birthYear;
// }
// const age2 = calcAge2(1998);

// console.log(age1, age2);




// // arrow function
// const calcAge3 = birthYear => 2077 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yrsUntilRetirement = (birthYear, firstName) => {
//     const age = 2077 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} was born in ${birthYear} and retires in ${retirement} years`;
// };

// console.log(yrsUntilRetirement(2035, `Tee`));
// console.log(yrsUntilRetirement(2048, `Luh`));




// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(6, 9));




// const calcAge = function (birthYear) {
//     return 2077 - birthYear;
// }

// const yrsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired. 🎊`);
//         return -1;
//     }
// };
// console.log(yrsUntilRetirement(2043, `Tee`));
// console.log(yrsUntilRetirement(1999, `Bru`));




// // CODING CHALLENGE #1

// // use arrow function
// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// };

// // use function expression
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`The Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas}).`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`The Koalas wins 🏆 (${avgKoalas} vs. ${avgDolphins}).`);
//     } else {
//         console.log(`Nobody wins. 😢`)
//     }
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(503, 123);
// checkWinner(133, 425);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);



// arrays methods
// const friends = [`Bru`, `Bra`, `Bro`];
// friends.push(`Vip`); // adds to end
// friends.unshift(`Vop`); // adds to beginning

// friends.pop(); // removes last item
// friends.shift(); // removes first item

// console.log(friends.indexOf(`Bro`)); // returns index of Bro
// console.log(friends.indexOf(`Nub`)); // returns -1 if not found

// console.log(friends.includes(`Bro`));
// console.log(friends.includes(`Nub`));




// // CODING CHALLENGE #2

// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// const calcTip = function (billArray) {
//     billArray.forEach(bill => {
//         let tipAmount;
//         if (bill >= 50 && bill <= 300) {
//             tipAmount = bill * 0.15;
//         } else if (bill >= 0) {
//             tipAmount = bill * 0.2;
//         } else {
//             console.log(`Not a valid bill amount: ${bill}`);
//         }
//         tips.push(tipAmount);
//         totals.push(bill + tipAmount);
//     });
// }

// calcTip(bills);
// console.log(tips);
// console.log(totals);




// // objects
// const person = {
//     firstName: `Thong`,
//     lastName: `Le`,
//     age: 2020 - 1998,
//     job: `student`
// };

// // dot notation
// console.log(person.lastName);

// // bracket notation
// console.log(person[`lastName`]);
// // accepts expressions in bracket
// const nameKey = `Name`;
// console.log(person[`first` + nameKey]);
// console.log(person[`last` + nameKey]);

// const interestedIn = prompt(`Select firstName, lastName, age, job to learn more.`)

// if(person[interestedIn]) {
//     console.log(person[interestedIn]);
// } else {
//     console.log(`Invalid property. Try firstName, lastName, age, job.`);
// }

// person.location = `California`;
// person[`twitter`] = `@bathong188`;
// console.log(person);




// // object methods
// const person = {
//     firstName: `Thong`,
//     lastName: `Le`,
//     birthYear: 1998,
//     job: `student`,
//     hasDriversLicense: true,

//     // function expression
//     // calcAge: function (birthYear) {
//     //     return 2020 - birthYear;
//     // }

//     // using this object
//     // calcAge: function () {
//     //     return 2020 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//         return this.age;
//     },

//     // assume calcAge() is not called and age is not yet created
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year-old ${job}, and has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
//     }
// };

// // console.log(person.calcAge(1998));
// // console.log(person[`calcAge`](1998))

// // console.log(person.calcAge());
// // console.log(person[`calcAge`]());

// console.log(person.age);
// console.log(person[`age`]);





// // CODING CHALLENGE #3

// const mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// };
// const john = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// if (mark.calcBMI() < john.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()}).`);
// } else if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()}).`);
// } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${john.calcBMI()}).`);
// }





// // CODING CHALLENGE #4

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];

// const calcTip = function (billArray) {
//     billArray.forEach(bill => {
//         let tipAmount; // every loop, this var is re-created
//         if (bill >= 50 && bill <= 300) {
//             tipAmount = bill * 0.15;
//         } else if (bill >= 0) {
//             tipAmount = bill * 0.2;
//         } else {
//             console.log(`Not a valid bill amount: ${bill}`);
//         }
//         tips.push(tipAmount);
//         totals.push(bill + tipAmount);
//     });
// }

// const calcAverage = function (array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum / array.length;
// }

// calcTip(bills);
// console.log(bills, tips, totals, `Average: ${calcAverage(totals)}`);

