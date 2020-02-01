function solve(input) {
    let hoursNeeded = Number(input.shift());
    let daysAvailable = Number(input.shift());
    let overtimeWorkers = Number(input.shift());
    let totalDaysAvailable = daysAvailable - (daysAvailable * 0.10);
    let hoursWorked = Math.floor(totalDaysAvailable * 8);
    let overtime = Math.floor(overtimeWorkers * 2 * daysAvailable);
    let totalHoursWorked = Math.floor(hoursWorked + overtime);
    if (hoursNeeded <= totalHoursWorked) {
        let hoursLeft = totalHoursWorked - hoursNeeded;
        console.log(`Yes!${hoursLeft} hours left.`);
    } else if (hoursNeeded > totalHoursWorked) {
        let hoursShortage = hoursNeeded - totalHoursWorked;
        console.log(`Not enough time!${hoursShortage} hours needed.`)
    }   
}
solve(["99", "3", "1"])