// program to display the sum of natural numbers
// looping from i = 1 to n
// in each iteration, i is increased by 1
let sum = 0;
const n = 10


//using for loop
for (let i = 1;i <= n ; i++) {
    sum += i;  // sum = sum + i
}
console.log('sum:', sum); //55

//using while loop
sum=0;

let i=1;
while(i<=n){
    sum += i;  // sum = sum + i
    i++;
}
console.log('sum:', sum); //55

//using do while loop
sum=0;

i=1;
do{
    sum += i;  // sum = sum + i
    i++;
}while(i<=n);
console.log('sum:', sum); //55


sum=0;
//using for loop without braces
for (let i = 1;i <= n ; i++) 
    sum += i;  // sum = sum + i
console.log('sum:', sum); //55

