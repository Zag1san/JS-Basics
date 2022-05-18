function solve(input) {

input.sort((a,b) => a-b)
let result = [];
result.push(input[0], input[1])
console.log(result.join(" "));
}
solve([30, 15, 50, 5])