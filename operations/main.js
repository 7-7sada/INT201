// conditional operation (?:)
let age = 40
const greeting = age > 40 ? 'Good Morning' : 'Hello'
console.log(greeting)
console.log('--------------')

// optional chaining (?.)
// array
let index = 0
let data
const firstItem = data?.[0]
console.log(firstItem)
// object
let student
console.log(student?.firstName)
console.log('--------------')

// nullish coalescing
let items = null
items = items ?? []
console.log(items)
let options = { delay: '5ms' }
let newTitle = 'Chapter 3 - Operations'
// options.title = newTitle ?? 'untitled'
options.title = options.title ?? 'untitled'
console.log(options)
console.log('--------------')

// Math
let randNum = Math.random() * 10 //returns between 0-9.xxxx
console.log(randNum)
let useNum = Math.floor(randNum) + 1 //random 1-10
console.log(useNum)
console.log('--------------')

// String
let str = `Hello, World!`
console.log(`str.length: ${str.length}`)
console.log(str.replace('l', '*'))

//ex.1
// function getTitle (sex){
//     return result = sex === 'male' ? 'Mr' :sex==='female' ?'Ms':'N/A'
// }
// console.log(getTitle('male'))
// console.log(getTitle('female'))
// console.log(getTitle())

//-----------------------
let arr1=[5,4,3]
let arr2=[5,4,3]
console.log(typeof arr1)
console.log(typeof arr2)
console.log(arr1===arr2)

let arr3=arr1
console.log(arr1===arr3)

arr3[0] = 111
console.log(arr1[0])