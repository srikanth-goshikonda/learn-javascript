// program to display numbers till condition using break
// looping from i = 1 to n

const n = 10
//using for loop
for (let i = 1;i <= n ; i++) {
    console.log(i);
    if(i==10)
    break;
}

// program to display numbers skip particular number
// looping from i = 1 to n
for (let i = 1;i <= n ; i++) {
    
    if(i==5)
    continue;
    console.log(i);
}
