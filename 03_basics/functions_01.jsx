console.log("A")
console.log("F")
console.log("A")
console.log("Q")
console.log("A")
console.log("H")
console.log("M")
console.log("A")
console.log("D")


const sayMyName =function(){
console.log("A")
console.log("F")
console.log("A")
console.log("Q")
console.log("A")
console.log("H")
console.log("M")
console.log("A")
console.log("D")
}

sayMyName()


const sum= function(){
    console.log(12+2)
}

sum()

const Addition= function(number1,number2){
    console.log(number1+number2)
}

Addition(10,12)

const anotherFunction= function(number1,number2){
    const result= number1 * number2
    return result
}

const result=anotherFunction(25,5)

console.log(`Result : ${result}`)


const name= function(value="User"){
if(value !=""){
    return `My name is ${value}`
}
 return console.log("Enter a user name please........")
}
// console.log(name("Afaq"))
console.log(name())



