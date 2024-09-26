// Datatypes in Js are categorized on the basis of their allocation in memory 


// Primitive
// whenever primitives are defined or get, they are passed always by value i.e.
// their values get copied and passed


// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const stringType = "Duaa"
console.log(typeof stringType)

const numType = 123
console.log(typeof numType)

const boolType = true
console.log(typeof boolType)

const nullType = null
console.log(typeof nullType)

const undefinedType = undefined
console.log(typeof undefinedType)

const symbolType = Symbol(123)
console.log(typeof symbolType)

// it is used mainly to make some variable unique like some id data e.g.
const symbolType2= Symbol(123)
console.log(symbolType === symbolType2)
// although their value was same but Symbol makes their data type different to make them unique


const bigIntType = 123n
console.log(typeof bigIntType)


// Reference types OR Non-Primitive

// Arrays, Objects and Functions
const arrayType = ["Duaa",123, true];
console.log(typeof arrayType)


const objType = {
    name: "Duaa",
    age: "123",
    active: true
}
console.log(typeof objType)

const funcType = function(){
    console.log("Hello from function")
}
console.log(typeof funcType)