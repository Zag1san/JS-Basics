function solve(input) {

    let studentName = input.shift();
    let currentGrade = +input.shift();
    let gradesSum= 0;
    let yearsCnt = 1;

    while (yearsCnt <= 12) {
        
        if (currentGrade >= 4) {
            gradesSum += currentGrade;
            yearsCnt++;
        }

        currentGrade = +input.shift();
        
    }
    let averageGrade = gradesSum / 12;
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}
solve([
    'Pesho', '4',    '5.5',
    '6',     '5.43', '4.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5',     '6'
  ])