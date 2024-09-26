// console.log(2 ==1)
// console.log(2 !=1)



console.log("2" > 1) //true converting in number and then comparing
console.log("02"> 1) //true


console.log(null > 0) //false
console.log(null == 0) //false
console.log(null < 0) //false
console.log(null <= 0) //true
console.log(null >= 0) //true
// reason is that an equity check == and comparisons > <= >= work differently
// comparisons convert null to number, treating it as 0.
// Thats why null>-=0 or null<=0 is true 
// but null > 0 is false
// so comparison and equality check work differently
// so we have to avoid such ambigious comparisons



// strict check ===
//  it checks data types alongwith value
console.log("2" == 2) //true
console.log("2" === 2) //false







