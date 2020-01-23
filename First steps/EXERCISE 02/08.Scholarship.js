function solve(input) {
    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minimalWage = Number(input.shift());
    let socialScholarship = minimalWage * 0.35;
    let gradeScholarship = grade * 25;
    if (income > minimalWage) {
        console.log(`You cannot get a scholarship!`);
    } else if (grade < 4.5) {
        console.log(`You cannot get a scholarship!`);
    } else if (socialScholarship > gradeScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (grade > 5.5) {
        let scholarship = Math.max(socialScholarship, gradeScholarship);
        console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
    } else {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    }

}
solve(["120", "5.6", "140"])