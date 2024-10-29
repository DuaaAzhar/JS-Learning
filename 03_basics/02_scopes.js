// CLOSURES => in case of nested loops or scopes, child scope can access vars of parent scope,
// but vars of child will not be accessible out of scope

function one() {
    const username = "Duaa"
    function two() {
        const website= "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

one();



// HOISTING 
// Behaviour difference when functions defined differently

console.log(addOne(5)); //will be called successfully
function addOne(num) {
    NAME= "Duaa"  //if you define without declaration, it automatically becomes global variable
    return num+1
}


// console.log(addTwo(5)); //will give error of undefined
const addTwo = function (num) {
    return num+2
}

console.log(NAME);



// HOISTING= In JS, declarations are hoisted, i.e. we can use the variable before its declaration
x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

// let and const are hoisted at the top of block but not initialized
// let x; //will throw reference error
// const x; //will throw syntax error 

// But initializations are not hoisted in JS as we cannot use variable before its initialization



// var y = 5; // Initialize x

// console.log(y + " " + z);            // Display y and z   //z will be undefined

// var z = 7; // Initialize y



// this will work

var y = 5; // Initialize x
z = 7;

console.log(y + " " + z);            // Display y and z   //z will be undefined

var z // Initialize y
