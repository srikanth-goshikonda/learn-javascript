//JavaScript Functions
greet();
sum(25,25);
let result = getSum(25,25)
console.info(result)

function greet() {
    console.log('Hello World!')
}

//Function with parameters
function sum(a, b) {
    console.log('Addition of Two numbers', a + b)
}

//Function with parameters
function getSum(a, b) {
   return a + b
}

//Function Expression
let mul = function(num){return num*num}
result = mul(5) //25
console.log(result)
console.log(mul)


//Arrow Function 
let div = (num)=>num*num
result = div(5) //25
console.log(result)






