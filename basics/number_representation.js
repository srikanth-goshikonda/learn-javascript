//Exponential Representation
const a1 = 5e9;
console.log(a1); //5000000000

//Negative Exponential Representation
const a2 = 5e-5;
console.log(a2); // 0.00005

// Numbers can also be denoted in hexadecimal notation. For example, 
const a3 = 0xff;
console.log(a3); // 255

// Numbers can also be denoted in Octal notation. For example, 
const a4 = 0o10;
console.log(a4); // 8

// Numbers can also be denoted in Binary notation. For example, 
const a5 = 0b1010;
console.log(a5); // 10

// Numbers can also be denoted in Octal notation. For example, 
const a6 = 010;
console.log(a6); // 8

//javascript NaN -> Not a Number
let a7 = 4-'2'
console.log(a7) //2: it will parse and does operation if string contain numbers

a7 = a7 -'hello'
console.log(a7) //NaN
console.log(isNaN(a7)) //buit in method to check NaN or not

//javaScript Infinity
let a8 = 2/0.0 //INFINITY
a8 = -2/0 //-INFINITY

//Advantage of bigint
let a9 = 505050500000000001;
console.log(a9) //50505050000000000 we loose precision here 
a9= 505050500000000001n
console.log(a9) //505050500000000001