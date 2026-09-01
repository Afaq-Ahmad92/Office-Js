const Subject_1= new Array("Maths","Physics","ICS")
const Subject_2= new Array("Urdu","English","Islamiat")

// console.log(Subject_1.push(Subject_2))
// console.log(Subject_1)
// console.log(Subject_2)

// console.log(Subject_1[3][0])

const allSubjects=Subject_1.concat(Subject_2)

console.log(Subject_1)
console.log(Subject_2)
console.log(allSubjects)

const newArray= [...Subject_1,...Subject_2]
console.log(newArray)

const anotherArray= [1,2,3,4,["a","b",["x","y"],["z","@"]]]

const realArray = anotherArray.flat(Infinity)

console.log(anotherArray)
console.log(realArray)

console.log(Array.isArray("Muhammad Afaq Ahmad"))
console.log(Array.from("Muhammad Afaq Ahmad"))
console.log(Array.from({name:"Muhammad Afaq Ahmad"}))

const MathScore= 74
const PhyScore= 65
const EnglishScore=70

console.log(Array.of(MathScore,PhyScore,EnglishScore))