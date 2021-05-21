function solve(input) {

let kNumber = input.shift()

let firstElements = input.slice(0, kNumber)
let lastElements = input.slice(input.length - kNumber)

console.log(firstElements.join(" "));
console.log(lastElements.join(" "));
}
 solve([3,
    6, 7, 8, 9]
   )