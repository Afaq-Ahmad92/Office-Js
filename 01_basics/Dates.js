// let myDate= new Date()

// let myDate = new Date("December 17, 1995 03:24:00");
// let myDate = new Date("1995-12-17T03:24:00")
// let myDate = new Date(1995, 11, 17);
// let myDate = new Date(1995, 11, 17, 3, 24, 0);
// let myDate = new Date(628021800000);
// let myDate = new Date("2020-05-12T23:50:21.817Z");
let myDate = new Date()

console.log(myDate[Symbol.toPrimitive]("string"))
console.log(myDate.valueOf())
console.log(myDate.toUTCString())
console.log(myDate.toTimeString())
console.log(myDate.toString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toDateString())

const [month,day,year] = [
    myDate.getMonth(),
    myDate.getDay(),
    myDate.getFullYear()
]

console.table([day,month,year])

const [Second, Minute, Hour, MilliSecond]= [
    myDate.getSeconds(),
    myDate.getMinutes(),
    myDate.getHours(),
    myDate.getMilliseconds()
]

console.table([Hour,Minute,Second,MilliSecond])


const timeStamps=Date.now()

console.log(timeStamps)

const parse=Date.parse("1970-01-01T00:00:00Z")

console.log(parse)


let date = new Date()

console.log(date.getDate())
console.log(date.getTime())
console.log(date.getTimezoneOffset())
console.table([date.getUTCDay(),date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()])
console.log(date.getYear())

date.setFullYear(2028)

console.log(date)