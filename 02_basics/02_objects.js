// singleton
Object.create

// literals
const literal= {
    name: "Duaa",
    "full name": "Duaa Azhar",
    age: 24,
    email: "duaaazhar04@gmail.com",
    loggedIn: true,
    sym: Symbol("myKey")

}


// WAYS to ACCESS
console.log(literal.name)
console.log(literal["full name"])
console.log(typeof literal.sym)

// DISPLAY AN OBJECT 
console.log("DISPLAY AN OBJECT")
console.log(Object.values(literal))
console.log(Object.entries(literal))
console.log(JSON.stringify(literal))



// if have to use already defined Symbol
const mysym= Symbol("key2")
const obj={
    [mysym]: "myKey2"
}
console.log(obj[mysym])
console.log(obj)
console.log(literal)


// ADDING A FUNCTION IN OBJECT
literal.greeting = function() {
    console.log(`Hello Greeting ${this.name}`)
}
console.log(literal.greeting())



// FREEZE AN OBJECT
Object.freeze(literal)
literal.age = 25;
console.log(literal) 



