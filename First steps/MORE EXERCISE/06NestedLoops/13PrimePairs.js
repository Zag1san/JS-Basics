function solve(input) {

    let firstPairStart = +input.shift();
    let secondPairStart = +input.shift();
    let firstPairdiff = +input.shift();
    let seconPairDiff = +input.shift();
    let firstPairFinish = firstPairStart + firstPairdiff;
    let secondPairFinish = seconPairDiff + secondPairStart;

    for (let a = firstPairStart; a <= firstPairFinish; a++) {

        for (let b = secondPairStart; b <= secondPairFinish; b++) {

            let isAPrime = true;
            let isBPrime = true;
            for (let c = 2; c <= Math.sqrt(a); c++) {
                if (a % c === 0) {
                    isAPrime = false;
                    break;
                }

            }
            for (let d = 2; d <= Math.sqrt(b); d++) {
                if (b % d === 0) {
                    isBPrime = false;
                    break;
                }

            }
            if(isAPrime && isBPrime) {
                console.log(`${a}${b}`)
            }
        }

    }
}

solve([10,
    30,
    9,
    6
])