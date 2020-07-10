function solve(numbers) {

    let oddSum = 0;
    let evenSum = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let result = evenSum - oddSum;
    console.log(result)
}
solve([3,5,7,9])