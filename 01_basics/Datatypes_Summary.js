//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let Name= "Afaq"
let Age= 24
let Married= false
let temprature=null

let Status

let accountId = Symbol("123")
let Id= Symbol("123")

console.log(accountId==Id)



// Reference (Non primitive)

// Array, Objects, Functions

const Heros = ["Imran Khan", "Qadeer Khan", "Babar Azam"]

const myObject={
    name: "Afaq",
    age: 24,
    status:"Unmarried"
}


const MyFunction= function(){
    console.log("This is my own function....")
}

MyFunction()


// ........ Stack & Heap .......

// ........ Primittive (Stack) .......

let UserOne = 'Afaq'


let UserTwo= UserOne

console.log(UserOne)
console.log(UserTwo)

UserTwo = "Ahmad"

console.log(UserOne)
console.log(UserTwo)


// ........ Non-Primittive (Heap) .......

let accountOne= {
    name : "Afaq",
    email: "eengr2927@gmail.com"
}

let accountTwo= accountOne

console.log(accountOne)
console.log(accountTwo)

accountTwo.email= "himskhan7869@gmail.com"

console.log(accountOne)
console.log(accountTwo)