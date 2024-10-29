function loginUserMessage1(username) { //username => parameters
    return `${username} just loggedin`
}

//will not print anything as we have not instructed to print the function's return value
loginUserMessage1("Duaa")  //arguments 


// will print 
console.log(loginUserMessage1("Duaa"))


// if user dont pass arguments in a function => will take param as "undefined"
console.log(loginUserMessage1())


// to avoid it 
function loginUserMessage2(username) { //username => parameters
    if(!username){
        return console.log("Please enter username");
    }
    else{
        return `${username} just loggedin`
    }
}


console.log(loginUserMessage2())


// passing the default value
function loginUserMessage3(username= "") { //username => parameters
    if(username){
        return console.log("Please enter username");
    }
    else{
        return `${username} just loggedin`
    }
}

console.log(loginUserMessage3())



// Passing many arguments to function definition

function calculateCartPrice1(num1) {
    return num1
}
console.log(calculateCartPrice1(200,300,400)); //will automatically take first argument as num1;


// if we wanna consider all args  => use rest operator
function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice2(200,300,400));  //200 and 300 will be considered as val1 val2, so return = [400] 


// if we wanna consider all args  => use rest operator
function calculateCartPrice2( ...num1) {
    return num1
}
console.log(calculateCartPrice2(200,300,400)); //will automatically take first argument as num1;

const obj= {
    username: "Duaa",
    age: 20
}

function handleObject(obj) {
    console.log(`username is ${obj.username} and user's age is ${obj.age}`)
}
handleObject(obj)

