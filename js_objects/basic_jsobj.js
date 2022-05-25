// Here is an example of a JavaScript object.

let student = {
    'first name':'Srikanth',
    branch:'ECE',
    pin : 123,
    
    //JavaScript Nested Objects
    address:{
        h_no:123,
        pincode:654321
    }
}

//Accessing Object Property values
//using dot (.) operator
console.log(student.branch)
console.log(student.address)
console.log(student.address.pincode)

//using brackets [] 
console.log(student['first name'])


//Delete property from object
delete student.address
console.log(student)


//Iterating using keys 
console.info('Iterating using for in')
for(let key in student){
    console.log(student.key)
}

//JavaScript Methods and this Keyword
let person = {
    name:'srikanth',
    walk:function(){
        console.log(this.name + ' walking')
    }
}

person.walk();
//Adding properties to existing object
person.age = 25

console.log(person)