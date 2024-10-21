const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


// REPEAT OPERATION 
let repeatString = "Duaa"
console.log(repeatString.repeat(5))

// REPLACE OPERATION 
// will replace only first occurence
let replaceString = "Please visit Microsoft instead of MICROSOFT. Message from: MICROSOFT "
console.log(replaceString.replace("MICROSOFT", "UBUNTU"));



// REPLACEALL OPERATION 
// will replace all  occurence
console.log(replaceString.replaceAll("MICROSOFT", "UBUNTU"));


// SPLIT OPERATION
let splitString = "Please visit Microsoft instead of MICROSOFT. Message from: MICROSOFT"
console.log(splitString.split(" "));
console.log(splitString.split()); //will split all string in 0 index
console.log(splitString.split("")); //will split all string character wise

// INDEXOF
let indexOfString = "Please locate where 'locate' occurs!";
console.log(indexOfString.indexOf("locate"));

// Last INDEXOF
console.log(indexOfString.lastIndexOf("locate"));

// IndexOf by giving 2nd param of from where search should start
console.log(indexOfString.indexOf("locate", 8));

// SEARCH
console.log(indexOfString.search("locate"));
console.log(indexOfString.search(/locate/));


// search can take Regular expressions but indexOf cannot. IndexOf can take 2 params whereas search can take only 1



