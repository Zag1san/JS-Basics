function solve(input) {

    let daysSpent = +input.shift();
    let hoursPerDay = +input.shift();
    let totalSum = 0;
    let sumForDay = 0;

    for (let day = 1; day <= daysSpent; day++) {
        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 === 1) {
                sumForDay += 2.50;
            } else if (day % 2 === 1 && hour % 2 === 0) {
                sumForDay += 1.25;
            } else {
                sumForDay += 1;
            }
        }
        console.log(`Day: ${day} - ${sumForDay.toFixed(2)} leva`);
        totalSum += sumForDay;
        sumForDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
solve([5, 2])