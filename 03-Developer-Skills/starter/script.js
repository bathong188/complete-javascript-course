// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2020 - birthYear;

// console.log(calcAge(1998));

// CODING CHALLENGE #1

const forecastMaxTemps = [17, 'error', 21, 23];
const printForecast = function (arr) {
  let forecastStatement = '';
  for (let i = 0; i < arr.length; i++) {
    // if not a number, skip
    if (typeof arr[i] !== 'number') continue;

    forecastStatement += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(forecastStatement);
};

printForecast(forecastMaxTemps);

// take in array
// handle non-numbers
// handle numbers
// concatenate print statement
// print max temps in string
