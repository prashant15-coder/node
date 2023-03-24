//common js - every file is module in node(y default)
//modules encapsulated code(only share minimum)
const names= require('./3-names')
//console.log(names)
const sayHi= require('./4-utils')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
//another way of calling the modules is 
//module.exports.items = ['items', 'items2']
//const person ={
//    name:'bob',
//}
//module.exports.singlePerson = persdon
const john='john';
const peter='peter';

require('./7-mindgrenade')