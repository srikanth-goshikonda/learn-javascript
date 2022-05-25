// A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.
var message = 'Hello World'
console.log(message);

var message ='Second Declaration allowed through var keyword'
console.log(message)

//let keyword introduced in ES6 , second declaration not allowed like above using let
let message ='Hello World'  /*SyntaxError: Identifier 'message' has already been declared */
console.log(message)