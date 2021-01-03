
// let js = 'amazing';

// console.log(420 + 69);

// let firstName = "Summon";

// let country = "Murica";
// let continent = "NA";
// let population = 300000;

// console.log(country + ' ' + continent + ' ' + population);

// Coding challenge #4


const billAmount = Number(prompt(`Enter bill total`, 0));
const tipAmount = 50 <= billAmount && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;

console.log(`The bill is $${billAmount} plus $${tipAmount} tip. Grand total is ${billAmount + tipAmount}.`)