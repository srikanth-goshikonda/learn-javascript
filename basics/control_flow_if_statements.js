//The syntax of the if statement is:
// check if the number is positive

let number = 25
if (number > 0) {

  console.log("The number is positive");
}

//The syntax of the if else statement is:
// check if the number is even or odd

number = 24
if (number %2== 0) {
  console.log("The number is even");
}
else{
    console.log("The number is odd")
}


//The syntax of the if else if statement is:
// check grade based on marks

let marks = 36
if (marks < 35) {
  console.log("Failed");
}
else if(marks>=35 && marks<50){
    console.log("D Grade")
}
else if(marks>=50 && marks<70){
    console.log("C Grade")
}
else if(marks>=70 && marks<80){
    console.log("B Grade")
}
else if(marks>=80 && marks<=100){
    console.log("A Grade")
}

//The syntax of the nested if statement is:
// check if the number is positive, negative or zero
number = 58

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}

//Body of if...else With Only One Statement
number = 2;
if (number > 0)
    console.log("The number is positive.");
 else 
   console.log("The number is negative or zero.");


