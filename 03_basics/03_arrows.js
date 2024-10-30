
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
}

thisInFunction()

const thisInArrowFunc= () => {
    let username = "Duaa"
    console.log(this.username);
}

thisInFunction()


// ARROW FUNCTIONS

const method1 = (num1, num2)=>{ 
    return num1+num2
}
console.log(method1(1,2))

const method2 = (num1, num2)=>  (num1+num2)  //can also be written without () like num1+num2  
console.log(method2(1,2))


const returnObj = () => ({username: "Duaa", price: 2000})
console.log(returnObj())

