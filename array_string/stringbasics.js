//Create JavaScript Strings

//Single quotes: 
const name = 'Srikanth'

//Double quotes:
const name1 = "Goshikonda"

//BackTicks:
const fullName = `Hi ${name} ${name1}`
console.log(fullName);

//Access String Characters using []
console.log(fullName[0]);

//Access String Characters using charAt method
console.log(fullName.charAt(0));

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

//escape character
const x = 'My name is \'Peter\'.';
console.log(x);

export function duplicateLetters(input)
{
    let map = new Map()

    for(let key of input)
    {
        if(map.has(key)){
            map.set(key,map.get(key)+1)
        }
        else{
            map.set(key,1)
        }
    }
    console.log(map);
}



