//JavaScript Constructor Function
//In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person (name,age) {
    this.name = name,
    this.age = age,
    this.walk=()=>console.log(this.name,' Walking');
}

// create an object
const person = new Person('Srikanth',25);
console.log(person);
person.walk()

