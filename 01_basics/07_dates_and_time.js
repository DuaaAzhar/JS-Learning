let myDate = new Date(2023, 0, 1, 3, 12, 0); //can also be defined by yourself 
// to get current Time
console.log("current Time: ", new Date());

console.log(myDate);

console.log("Date string: ",myDate.toDateString());

console.log("ISO string: ",myDate.toISOString());

console.log("Locale Date string: ",myDate.toLocaleDateString());

console.log("Locale string: ",myDate.toLocaleString());

console.log("Locale Time string: ",myDate.toLocaleTimeString());

console.log("to string: ",myDate.toString());

console.log("UTC string: ",myDate.toUTCString());



// formats to define the date time variable

console.log((new Date(2023, 0, 1, 3, 12, 0)).toDateString()); 
console.log((new Date("01/02/23")).toDateString());
console.log((new Date("01-02-2023")).toDateString()); 
console.log((new Date(23,2,3)).toDateString()); 
console.log((new Date("2023-01-14")).toDateString()); 



// to get timestamps

let myTimestamp = Date.now()
console.log(myTimestamp)

console.log("In seconds: ",myTimestamp/1000);  //will give value in float so
console.log("In seconds: ",Math.floor(myTimestamp/1000));


// Fetch data from Date 
let date= new Date();
console.log(date.getDay())
console.log(date.getMonth() +1)
console.log(date.getFullYear())
console.log(date.getUTCFullYear())
console.log(date.getTime())
console.log(date.getHours())


// CUSTOM DATES

let customDate= date.toLocaleString('default', {
    // weekday: "narrow",
    timeStyle: "long",
    timeZone: "GMT",
})

console.log("custom date= ",customDate)

// COMPARING DATES
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2023, 9, 16);

if (someday == today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is not January 14, 2100.";
}
console.log(someday)
console.log(today)









