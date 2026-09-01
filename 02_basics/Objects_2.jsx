// const user = new Object()

// console.log(user)

// const user={}

// console.log(user)

// user.name="Afaq Ahmad"
// user.email="eengr2927@gmail.com"
// user.age=24

// console.log(user)

const user={
    name:{
        userName:{
            userFullName: {
                firstName: "Afaq",
                lastName: "Ahmad"
            }
        }
    }
}

console.log(user.name.userName.userFullName.firstName)
console.log(user.name.userName.userFullName.lastName)


const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}
const obj3= {5:"a",6:"b"}

// const allObjects= {obj1,obj2,obj3}
// const objcets= Object.assign(obj1,obj2,obj3)
// console.log(objcets)
// console.log(obj1)
// console.log(objcets==obj1)


// const allObjects= Object.assign({}, obj1,obj2,obj3)

const allObjects= {...obj1,...obj2,...obj3}

console.log(allObjects)


const fbUsers= [
    {
        id: 1,
        name: "Afaq"
    },
    {
        id: 2,
        name: "saddam"
    },
    {
        id:3,
        name: "shahan"
    },
    {
        id: 4,
        name: "Eden"
    }
]

console.log(fbUsers[1].name)

console.log(Object.keys(fbUsers))
console.log(Object.values(fbUsers))
console.log(Object.entries(fbUsers))

console.log(user.hasOwnProperty('name'))