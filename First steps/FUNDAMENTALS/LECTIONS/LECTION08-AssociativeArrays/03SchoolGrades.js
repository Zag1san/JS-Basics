function solve(input) {

    let studentInfo = new Map();

    for (const line of input) {

        let tokens = line.split(" ");
        let name = tokens[0];
        let grades = tokens.splice(1).map(Number);
        if (studentInfo.has(name)) {
            let oldtGrades = studentInfo.get(name);
            let newGrades = oldtGrades.concat(grades);
            studentInfo.set(name, newGrades);
        } else {
            studentInfo.set(name, grades);
        }

    }

    let studentEntries = Array.from(studentInfo.entries());
    let sortedStudentEntries = studentEntries.sort((a, b) => {
        let gradesA = a[1];
        let gradesB = b[1];
        let averageGradeA = averageGrade(gradesA);
        let averageGradeB = averageGrade(gradesB);
        return averageGradeA - averageGradeB;
    })

    function averageGrade(grades) {
        let sum = 0;
        for (const grade of grades) {
            sum += grade;
        }
        return sum / grades.length;
    }
    for (const kvp of sortedStudentEntries) {
        console.log(`${kvp[0]}: ${kvp[1].join(`, `)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)