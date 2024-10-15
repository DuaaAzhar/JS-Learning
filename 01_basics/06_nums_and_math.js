// const score = 400

// const balance = new Number(100)
// console.log(typeof balance)
// console.log(typeof score)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))


// const floatNum= 124.5678;
// console.log(floatNum.toPrecision(4))


// const localeString = 10000000000;
// console.log(localeString.toLocaleString('en-IN')); // en-IN for converting it in indian english format


// // ++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++

// console.log(Math)


// // Absolute => makes the negative value as positive 
// console.log(Math.abs(-4));

// // round off
// console.log(Math.round(4.4));

// // ceil => to round of to top most value
// console.log(Math.ceil(4.4))

// // floor => to round of to minimum value
// console.log(Math.floor(4.4))

// MIN
console.log(Math.min(4, 5, 2, 1))

// MAX 
console.log(Math.max(4, 5, 2, 1))

// RANDOM
// Math.random gives the random value from 0 to 1
// it can also be 0.01 so thats why we are multiplying it with 10 
// adding 1 to set the minimum value that we want atleast

console.log(Math.random()*10 + 1)

// lets generalize this with min and max value
const min= 10
const max= 20

// max-min +1  => +1 is to avoid 0 if max min is same

console.log(Math.floor(Math.random()*(max-min + 1)) + min)






