function solve(input) {

    let poorGradesAlowed = +input.shift();
    let poorGradesCnt = 0;
    let gradesSum = 0;
    let problemsCnt = 0;
    let lastProblem = "";
    let currentProblem = input.shift();
    let currentGrade = +input.shift();
    let isTooManyPoorGrades = false;

    while (currentProblem !== "Enough") {
        lastProblem = currentProblem;
        problemsCnt++;
        if (currentGrade <= 4) {
            poorGradesCnt++;
        }
        if (poorGradesCnt >= poorGradesAlowed) {
            isTooManyPoorGrades = true;
            break;
        }
        gradesSum += currentGrade;
        currentProblem = input.shift();
        currentGrade = +input.shift();
    }
    let averageGrade = gradesSum / problemsCnt;
    if (isTooManyPoorGrades) {
        console.log(`You need a break, ${poorGradesAlowed} poor grades.`);
    } else {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCnt}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
solve([
    '4', 'Stone Age',
    '5', 'Freedom',
    '5', 'Storage',
    '3', 'Enough',
    ''
  ])