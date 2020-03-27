function solve(input) {
    let turns = Number(input.shift());
    let finalScore = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let invalidP = 0;
    for (let i = 1; i <= turns; i++) {
        let currentNum = Number(input.shift());
        if (currentNum >= 0 && currentNum < 10) {
            finalScore += currentNum * 0.20;
            p1 += 1;
        } else if (currentNum >= 10 && currentNum < 20) {
            finalScore += currentNum * 0.30;
            p2 += 1;
        } else if (currentNum >= 20 && currentNum < 30) {
            finalScore += currentNum * 0.40;
            p3 += 1;
        } else if (currentNum >= 30 && currentNum < 40) {
            finalScore += 50;
            p4 += 1;
        } else if (currentNum >= 40 && currentNum <= 50) {
            finalScore += 100;
            p5 += 1;
        } else {
            finalScore /= 2;
            invalidP += 1;
        }
    }
    p1 = p1 / turns * 100;
    p2 = p2 / turns * 100;
    p3 = p3 / turns * 100;
    p4 = p4 / turns * 100;
    p5 = p5 / turns * 100;
    invalidP = invalidP / turns * 100;
    console.log(finalScore.toFixed(2));
    console.log(`From 0 to 9: ${p1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidP.toFixed(2)}%`);
}
solve([ '3', '12', '-23', '46' ])