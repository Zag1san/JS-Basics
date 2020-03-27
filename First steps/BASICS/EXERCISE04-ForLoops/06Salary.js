function solve(input) {

    let tabNum = Number(input.shift());
    let salary = Number(input.shift());
    let fine = 0;
    for (let i = 1; i <= tabNum; i++) {
        let website = input.shift();
        switch (website) {
            case "Facebook": 
            fine += 150; 
            break;
            case "Instagram": 
            fine += 100; 
            break;
            case "Reddit": 
            fine += 50; 
            break;
            default: 
            fine += 0; break;
        }
    }
    let moneyAfterFine = salary - fine;
    if (moneyAfterFine <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(moneyAfterFine);
    }
}
solve([ '3', '500', 'Github.com', 'Stackoverflow.com', 'softuni.bg', '' ])