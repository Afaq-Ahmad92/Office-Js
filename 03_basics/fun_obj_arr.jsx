function shopping(...price){
    return price
}

console.log(shopping(100,200,300))

function anotherShopping(val1, val2, ...price){
    return price
}

console.log(anotherShopping(100,200,300,3000))

const user= {
    name: "Afaq",
    age:25
}

function objFun(anyObject){
    return  `My name is ${anyObject.name} and iam ${anyObject.age} years old`
}

console.log(objFun(user))

console.log(objFun({
    name: "Ahmad",
    age: 27
}))


const myArray= [100,200,3000]

function ArryFun(getArray){
    return getArray[2]
}

console.log(ArryFun(myArray))
console.log(ArryFun([3000,2000,1000]))