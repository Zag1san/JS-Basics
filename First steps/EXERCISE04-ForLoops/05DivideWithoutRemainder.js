function solve(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p1Sum = 0;
    let p2Sum = 0;
    let p3Sum = 0;
    for (let i = 1; i <= n; i++) {
    let currentNumber = Number(input.shift());
        if (currentNumber % 2 === 0) {
            p1Sum += 1;
        }  
        if (currentNumber % 3 === 0) {
            p2Sum += 1;
        } 
        if (currentNumber % 4 === 0) {
            p3Sum += 1;
        }
        p1 = p1Sum / n * 100;
        p2 = p2Sum / n * 100;
        p3 = p3Sum / n * 100;

    }
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
solve([
    '10',  '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65'
  ])