var lodash = require('lodash');

const counter = {value:1,time:10}
const copyCounter = Object.assign({},counter)
const copy1Counter = {...counter}
const copy2Counter = structuredClone(counter)
const copy3Counter = lodash.cloneDeep(counter)
const copy4Counter = JSON.parse(JSON.stringify(counter))


console.log(Object.entries(copyCounter))
console.log(Object.entries(copy1Counter))
console.log(Object.entries(copy2Counter))
console.log(Object.entries(copy3Counter))
console.log(Object.entries(copy4Counter))


