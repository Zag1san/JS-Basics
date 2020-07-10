function solve(numbers) {

let result = 0;

for (let currentNumber of numbers) {
    if (currentNumber % 2 === 0) {
        result += Number(currentNumber);
    }
}

console.log(result);


}
solve(['1','2','3','4','5','6'])