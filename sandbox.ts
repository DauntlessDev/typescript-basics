let myReply: string = "Brb"
myReply = "Otw"

const myVar = false;
let myNum = 1;
myNum = 3;


//bool, string, numer => basic types in typescript
//any undefined null void => others


let myObject = {
    name: "Brave",
    age: 24,
    isHappy: true
}

myObject = {
    name: "Brave",
    age: 24,
    isHappy: false
}

// ****Cant change any properties if variable is not the type of any
// myObject = {
//     name: "Brave",
//     age: 24,
//     isSad: true
// }



// Now with 'any' type, these works:
let myDetails: any = {
    name: "Brave",
    age: 24,
    isHappy: true
}

myDetails = {
    name: "Brave",
    age: 24,
    isSad: false
}


//-----------------------
const myInfo: any = {
    name: "Brave",
    age: 24,
    isHappy: true
}

myInfo.name = "Rom" // const properties can be changed



// Using interface

type GENDER = "M" | "F" //create your own type
type YEAR = "1st" | "2nd" | "3rd" //create your own type
interface IMyObject {
    name: string
    age: number
    gender: GENDER
    year?: YEAR //optional property
    printGreeting: () => void
}

// Cant work, because different different types, must follow the types of each property in the interface
// const myInfo: IMyObject = {
//     name: "Brave",
//     age: 24
// }

const myNewObj: IMyObject = {
    name: "Brave",
    age: 24,
    gender: "M",
    printGreeting: () => console.log("yo how r u")
}
