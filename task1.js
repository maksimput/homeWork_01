const counter = {}
const counter1 = new Object()
const counter2 = Object.create({})
const counter3 = Object.assign({},counter2)
console.log(typeof counter)
console.log(typeof counter1)
console.log(typeof counter2)
console.log(typeof counter3)
