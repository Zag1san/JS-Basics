function solve(input) {
    let studentsCnt = Number(input.shift());
    let allgrades = 0;
    let p1Top = 0;
    let p2BelowTop = 0;
    let p3AboveFail = 0;
    let p4Fail = 0;
    for (let i = 1; i <= studentsCnt; i++) {
        let currentGrade = Number(input.shift());
        if (currentGrade >= 2 && currentGrade < 3) {
            allgrades += currentGrade;
            p4Fail += 1;
        } else if (currentGrade >= 3 && currentGrade < 4) {
            allgrades += currentGrade;
            p3AboveFail += 1;
        } else if (currentGrade >= 4 && currentGrade < 5) {
            allgrades += currentGrade;
            p2BelowTop += 1;
        } else {
            allgrades += currentGrade;
            p1Top += 1;
        }
    }
    let averageGrade = allgrades / studentsCnt;
    p1Top = p1Top / studentsCnt * 100;
    p2BelowTop = p2BelowTop / studentsCnt * 100;
    p3AboveFail = p3AboveFail / studentsCnt * 100;
    p4Fail = p4Fail / studentsCnt * 100;
    console.log(`Top students: ${p1Top.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${p2BelowTop.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${p3AboveFail.toFixed(2)}%`);
    console.log(`Fail: ${p4Fail.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}
solve([
    '6',   '2', '3',
    '4',   '5', '6',
    '2.2', ''
  ])