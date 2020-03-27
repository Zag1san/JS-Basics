function solve(input) {
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
        for (i = 0; i < n; i++){
            let num = Number(input.shift());
            sum += num 
            if (num > max) {
              max = num
            }
        }
        let sumWithoutMax = sum - max;
        if (sumWithoutMax === max) {
            console.log(`Yes`);
            console.log(`Sum = ${max}`);
        } else {
            let diff = Math.abs(sumWithoutMax - max);
            console.log(`No`);
            console.log(`Diff = ${diff}`);
        }
}
solve([ '3', '5', '5', '1' ])