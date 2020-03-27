function solve(input) {
    let n = Number(input.shift());
    let lastPair = 0;
    let maxDiff = 0;

    for (let i = 0; i < n; i++) {
        let currentNum1 = Number(input.shift());
        let currentNum2 = Number(input.shift());

        let currentPair = currentNum1 + currentNum2;

        if (i > 0) {
            let currentDiff = Math.abs(currentPair - lastPair);

            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }

        lastPair = currentPair;

    }
    if (maxDiff === 0) {
        console.log(`Yes, value=${lastPair}`)
    } else {
        console.log(`No, maxdiff=${maxDiff}`)
    }
}
solve(['2', '1', '2', '2', '2'])