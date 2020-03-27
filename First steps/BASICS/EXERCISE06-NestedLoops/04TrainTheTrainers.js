function solve(input) {

    let n = +input.shift();
    let presentationName = input.shift();
    let sumOfAllGrades = 0;
    let counter = 0;
        while(presentationName !== "Finish") {
            let sum = 0;
            for(let i = 1; i <= n; i++) {
                let grade = +input.shift();
                sum += grade;
            }
            let averageGrade = sum / n;
            console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
            sumOfAllGrades += averageGrade;
            presentationName = input.shift();
            counter++;
        }
        let averageOfAllGrades = sumOfAllGrades / counter;
        console.log(`Student's final assessment is ${averageOfAllGrades.toFixed(2)}.`)
    
}
solve([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish',
    ''
  ])