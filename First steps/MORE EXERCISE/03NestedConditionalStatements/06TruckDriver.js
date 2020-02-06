function solve(input) {
    let season = input.shift();
    let kmPerMonth = Number(input.shift());
    let salary = 0;
    if (kmPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            salary = kmPerMonth * 0.75 * 4;
        }else if (season === "Summer") {
            salary = kmPerMonth * 0.90 * 4;
        } else {
            salary = kmPerMonth * 1.05 * 4;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            salary = kmPerMonth * 0.95 * 4;
        }else if (season === "Summer") {
            salary = kmPerMonth * 1.10 * 4;
        } else {
            salary = kmPerMonth * 1.25 * 4;
        }
    } else  if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
       salary = kmPerMonth * 1.45 * 4;
    }
    let taxFreeSalary = salary * 0.90;
    console.log(taxFreeSalary.toFixed(2));
}
solve([ 'Winter', '5678' ])