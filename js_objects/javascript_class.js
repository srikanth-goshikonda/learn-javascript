//JavaScript Classes

class Person {
    //Default Parameter Values
    constructor(name,age=25) {
      this.name = name;
      this.age=age;
    }
    get getName(){
      return this.name;
    }
    set setName(name){
      this.name=name;
    }
  }
  
  const person1 = new Person('John');
  person1.setName = 'Naresh'
  
  console.log(person1.getName); // John