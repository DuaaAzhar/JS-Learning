let arr1= [0,1,2,3]
let arr2= new Array(0,1,2,3)

console.log(typeof arr1)
console.log(typeof arr2)


// ***********************************************************************************************************
                                            // ARRAY METHODS
// ***********************************************************************************************************


let pushReturn= arr1.push(4)
console.log(arr1)
console.log(pushReturn)


let popReturn= arr1.pop()
console.log(arr1)
console.log(popReturn)

// Will add the element to start of array and returns new length of array
let unshiftReturn= arr1.unshift(0)
console.log(arr1)
console.log(unshiftReturn)


let shiftReturn= arr1.shift(2)
console.log(arr1)
console.log(shiftReturn)



// JOIN => JOINS the array by any specific separator and convert array to String
let joinReturn=arr1.join("") 
console.log(arr1) 
console.log(joinReturn)


// DELETE => Delete leaves the undefined holes in the array. Using pop() and shift() is preferable
let deleteReturn= delete arr1[0] 
console.log(arr1) 
console.log(deleteReturn)


// CONCAT => Concatenating multiple arrays always returns a new array without affecting original arrays
let concatReturn= arr1.concat([4,5,6,7,8]) 
console.log(arr1) 
console.log(concatReturn)


// CopyWithIn()
//  will copy the array elements to some other position in array
//  Will overwrite the existing values
//  will not change the size of array 
//  It changes the value of original array 


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// will copy at 2nd index starting from 0 index
console.log(fruits.copyWithin(2, 0));

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// Copy to index 2, the elements from index 0 to 2
console.log(fruits2.copyWithin(2, 0, 2));




// FLATTENING an array => if we have multiple subarrays in an array so we can flatten it
const flatArray= [1, 2, [3, 4, [5, 6]], 7, 8, 10]
console.log(flatArray.flat(Infinity))


// flatMap()
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//  it works only for depth 1
// it dont take multiple array
const flatMapArray= [1, 2, 3, 4, 5, 6, 7, 8, 10]
console.log(flatMapArray.flatMap(x => [x, x*10]))


// SPLICE
// The splice() method can be used to add new items to an array:

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// returns the deleted items array, will return [] if no elements deleted
const spliceFruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(spliceFruits.splice(2, 0, "Lemon", "Kiwi"));
// console.log(spliceFruits)


// if deleting Elements 
console.log(spliceFruits.splice(2, 2, "Lemon", "Kiwi"));
console.log(spliceFruits)

// toSpliced()
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 
// keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced)

// SLICE
// The slice() method slices out a piece of an array into a new array:

const sliceFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(2))
console.log(sliceFruits)



// ***********************************************************************************************************
                                            // FINDING AND SEARCHING
// ***********************************************************************************************************

const myArray = ["papaya", "banana", "orange", "kiwi", "apricot", "orange"]

console.log(myArray.indexOf("orange", 3)); //2nd param to indicate from where to start search
console.log(myArray.lastIndexOf("orange"));
console.log(myArray.includes("orange"));

// these methods will take function as a param
const findArray = [1,4,5,7,0,1,5,8,9];
console.log(findArray.find(myFunction));
function myFunction(value, index, array) {
    return value > 2;
}

console.log(findArray.findIndex(myFunction));
console.log(findArray.findLastIndex(myFunction));
console.log(findArray.findLast(myFunction));




// ***********************************************************************************************************
                                            // FINDING AND SEARCHING
// ***********************************************************************************************************

// sort => sorts string arrays only by alphabetical order
// will change original array
const sortArray = ["Banana", "Orange", "Apple", "Mango"];
console.log(sortArray.sort())


console.log(findArray.sort())
// reverse
// will change original array   --> alternative toSorted()
console.log(sortArray.reverse())

console.log(findArray.reverse())   //--> alternative toReversed()



console.log(Math.max.apply(null, findArray))
console.log(Math.min.apply(null, findArray))