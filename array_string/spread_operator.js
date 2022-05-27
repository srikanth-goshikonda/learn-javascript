//JavaScript Spread Operator
//The spread operator ... is used to expand or spread an iterable or an array. For example,

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

//Copy Array Using Spread Operator
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]

//Clone Array Using Spread Operator
let arr3 = [ 1, 2, 3];
let arr4 = [...arr3];

console.log(arr3); // [1, 2, 3]
console.log(arr4); // [1, 2, 3]

// append an item to the array
arr3.push(4);

console.log(arr3); // [1, 2, 3, 4]
console.log(arr4); // [1, 2, 3, 4]

//Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}