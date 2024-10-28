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


// concatenating an object 
const obj1= {1:'a', 2: 'b'}
const obj2= {3:'a', 4: 'b'}
const obj3= {5:'a', 6: 'b'}
const obj4= {obj1, obj2} //wrong way, as it will make nested objects
console.log(obj4)

// will copy the objects in the first passed object 
let obj5= Object.assign({},obj1, obj2, obj3)
console.log(obj5)
console.log(obj1)

// but spread operator is most recommended way
obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5)



// KEYS VALUES & ENTRIES
console.log(Object.keys(literal))
console.log(Object.values(literal))
console.log(Object.entries(literal))

// to check if a key exists or not
console.log(literal.hasOwnProperty('name'))

 


// DESTRUCTURING OF OBJECTS 

const course ={
    coursename: "javascript",
    price: 1000,
    courseInstructor: "duaa"
}

course.courseInstructor // not recommended to get each object

const {courseInstructor} = course;

// if want to use short word

const {courseInstructor: instructor} = course
console.log(courseInstructor)
console.log(instructor)

// JSON FORMART
// {
//     "coursename": "javascript",
//     "price": "1000",
//     "courseInstructor": "duaa"
// }
