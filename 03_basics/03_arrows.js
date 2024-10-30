
const user = {
    username: "Duaa",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`); //we cannot access username with "this" keyword
        console.log("OBJECT:   ",this)
    }
  }

  user.welcomeMessage();

  console.log("GLOBAL:    ",this);


function logging() {
    console.log("logging:     ",this);
}

// logging();


// so we cant access vars by this keyword in both type of functions 
function thisInFunction() {
    let username = "Duaa"
    console.log(this.username); //will be undefined
    console.log("this in regular function");
    console.log(this);
}

thisInFunction()

const thisInArrowFunc= () => {
    let username = "Duaa"
    console.log(this.username);
    console.log("this in arrow function");
    console.log(this);
    
}

thisInFunction()
thisInArrowFunc()

// ARROW FUNCTIONS

const method1 = (num1, num2)=>{ 
    return num1+num2
}
console.log(method1(1,2))

const method2 = (num1, num2)=>  (num1+num2)  //can also be written without () like num1+num2  
console.log(method2(1,2))


const returnObj = () => ({username: "Duaa", price: 2000})
console.log(returnObj())





//Handling of "this" in REGULAR Functions VS ARROW Functions
// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.


// for example in regular functions

// .....................Regular Function:

// hello = function() {
//     document.getElementById("demo").innerHTML += this;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);


// it will output 
// [object Window]

// after clicking button
// [object Window][object HTMLButtonElement]


// ...................ARROW Function

// Arrow Function:
// hello = () => {
//     document.getElementById("demo").innerHTML += this;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);


// //  it will output
// [object Window]
// // after clicking button 
// [object Window][object Window]

