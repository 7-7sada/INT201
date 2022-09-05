let x=[]
let y=null
let z
console.log(x.length) //0
// console.log(y.length) //error -> property array(length)
// console.log(z.length) //error -> property array(length)

let colors = [
    ['yellow','red'],
    ['blue','green','purple']
]
console.log(colors[colors.length-1].length) // 'blue','green','purple'

let newColors = [1001, ...colors]
console.log(newColors)

let arr6=Array.of(555, 888, 999, 333, 222)
const [,id,...r]=arr6

let items=[5,4,2,1]
for(const [index, item] of items.entries()){
    console.log(``)
}