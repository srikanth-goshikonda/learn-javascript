//JavaScript Arrays

//1. Using an array literal
const array1 = ["eat", "sleep"];

//2. Using the new keyword
const array2 = new Array("eat", "sleep");

// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];


//Access Elements of an Array
console.info(numberArray[0])


//Add an Element to an end of Array
numberArray.push(5)
console.log(numberArray)

//Add an Element to an start of Array
numberArray.unshift(5)
console.log(numberArray)

//Remove an Element to an end of Array
numberArray.pop()
console.log(numberArray)

//Remove an Element to an start of Array
numberArray.shift()
console.log(numberArray)

//length of an array
console.log(numberArray.length)

//Reversing an Array Elements
numberArray.reverse()
console.log(numberArray)

//Sorting an Array Elements
numberArray.sort()
console.log(numberArray)

//Iterating Element
for(let e of numberArray)
console.log(e)

//Iterating Elements through forEach method
numberArray.forEach(e=>console.log(e))

//Printing Indexes using for in loop
for(let index in numberArray)
console.log(index)