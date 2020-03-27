function solve(input) {
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (i = 0; i < n; i++) {
        let currentNumber = Number(input.shift());
        if (currentNumber < minNum) {
            minNum = currentNumber
        } 
        if (currentNumber > maxNum) {
            maxNum = currentNumber
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`)
}
solve([ '5', '10', '20', '304', '0', '50' ])