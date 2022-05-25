//Global Scope
let globalUser = 'Srikanth'
function greet(localUser) {
    console.log(globalUser)
    console.log('Hello ', localUser)
    {
        let blockLevelUser = 'Naresh'
    }
    //ReferenceError: blockLevelUser is not defined
    console.log(blockLevelUser);
}

greet('Suresh')


//ReferenceError: localUser is not defined
console.log(localUser);