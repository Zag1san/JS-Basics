function solve(input) {

    let studentName = input.shift();
    let currentGrade = +input.shift();
    let gradesSum = 0;
    let yearsCnt = 1;
    let timesExcluded = 0;
    let isExcluded = false;
    while (yearsCnt <= 12) {

        if (timesExcluded > 1) {
            isExcluded = true;
            break;
        }

        if (currentGrade >= 4) {
            gradesSum += currentGrade;
            yearsCnt++;
        } else {
            timesExcluded++;
        }
        currentGrade = +input.shift();
    }
    let averageGrade = gradesSum / 12;
    if (isExcluded) {
        console.log(`${studentName} has been excluded at ${yearsCnt} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
solve([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ])