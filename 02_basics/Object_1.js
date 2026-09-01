const symbol = Symbol("Ceg")

console.log(typeof symbol)
const User={
    userName: "Muhammad Afaq Ahmad",
    [symbol]: "Ceg1",
    email: "eengr2927@gmail.com",
    isLoggedIn: false,
    Age: 24,
    Gender: "Male"
}

console.log(User.userName)
console.log(User["Gender"])
console.log(typeof User[symbol])
console.log(User[symbol])

User.Education = function(){
    console.log("BS Software Engineering")
}

User.Skills= function(){
    console.log("Software Developer!!!!!!")
}

User.Gender="Something"
Object.freeze(User)
User.Gender="Nothing"

console.log(User["Gender"])


console.log(User.Education())
console.log(User.Skills())