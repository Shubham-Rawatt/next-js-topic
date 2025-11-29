
// --  object types in ts

// type obj={
//     name : string,
//     age :number,
//     isLang: boolean 
// }

// const person : obj={
//     name : 'object in ts',
//     age: 20,
//     isLang: true
// }

// -- ? optional when value is not assign

// type obj={
//     name : string,
//     age :number,
//     isLang?: boolean 
// }

// const person : obj={
//     name : 'object in ts',
//     age: 20,
//     isLang: true
// }


// -- interface in ts

interface  person {
    firstName : string,
    lastName : string,
    age : number 
}

const user: person ={
    firstName : 'type',
    lastName : 'script',
    age: 100
}