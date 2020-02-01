function solve(input) {
    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minimalWage = Number(input.shift());
    let socialScholarship = minimalWage * 0.35;
    let gradeScholarship = grade * 25;
    if (grade >= 5.5 && income < minimalWage) {
        if (gradeScholarship > socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
        } else if (gradeScholarship < socialScholarship) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else if (grade >= 5.5 && income >= minimalWage) {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
    } else if (grade > 4.5 && income < minimalWage) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (grade <= 4.5 && income <= minimalWage) {
        console.log(`You cannot get a scholarship!`);
    } else if (grade < 5.5 && income > minimalWage) {
        console.log(`You cannot get a scholarship!`);
    }
}
solve(["120", "5.6", "140"])