function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if (i % 2 === 1) {
            oddSum += num;
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
        } else {
            evenSum += num;
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin !== Number.MAX_SAFE_INTEGER && oddMax !== Number.MIN_SAFE_INTEGER) {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMin !== Number.MAX_SAFE_INTEGER && evenMax !== Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
}
solve(['4', '1.5', '1.75', '1.5', '1.75'])