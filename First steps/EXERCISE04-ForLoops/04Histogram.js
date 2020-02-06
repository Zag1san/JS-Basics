function solve(input) {
    let n = Number(input.shift());
    let p1Sum = 0;
    let p2Sum = 0;
    let p3Sum = 0;
    let p4Sum = 0;
    let p5Sum = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input.shift());
        if (currentNumber < 200) {
            p1Sum += 1;
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2Sum += 1;
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3Sum += 1;
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4Sum += 1;
        } else {
            p5Sum += 1
        }
        p1 = p1Sum / n * 100;
        p2 = p2Sum / n * 100;
        p3 = p3Sum / n * 100;
        p4 = p4Sum / n * 100;
        p5 = p5Sum / n * 100;
    }
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
solve([
    '9', '367', '99',
    '200', '799', '999',
    '333', '555', '111',
    '9'
])