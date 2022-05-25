/*JavaScript has the primitive data types:
1.  null
2.  undefined
3.  boolean
4.  number
5.  string
6.  symbol – available from ES2015
7.  bigint – available from ES2020*/

//null datatype
let obj = null
console.log(typeof obj) // object

//undefined
let counter 
console.log(counter)

//boolean
counter = true
console.log(typeof counter)

//number
counter = 12
console.log(typeof counter)

//string
counter = 'count value is 2255'
console.log(typeof counter)

//symbol
counter = Symbol()
console.log(typeof counter)

//bigint
counter = 132645494n
console.log(typeof counter)

//Max Value of number type
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)

//Min Value of number type
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

//Infinity and -Infinity
console.log(Number.MAX_VALUE+10)
console.log(Number.MIN_VALUE)
