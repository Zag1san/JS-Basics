function solve(input) {
let vacationPrice = Number(input.shift());
let puzzles = Number(input.shift());
let dolls = Number(input.shift());
let bears = Number(input.shift());
let minions = Number(input.shift());
let trucks = Number(input.shift());
let allToys = puzzles + dolls + bears + minions + trucks;
let puzzlePrice = 2.60;
let dollPrice = 3;
let bearPrice = 4.1;
let minionPrice = 8.2;
let truckPrice = 2;
let puzzlesIncome = puzzlePrice * puzzles;
let dollsIncome = dollPrice * dolls;
let bearsIncome = bearPrice * bears;
let minionsIncome = minionPrice * minions;
let trucksIncome = truckPrice * trucks;
let totalIncome = puzzlesIncome + dollsIncome + bearsIncome + minionsIncome + trucksIncome;
if (allToys >= 50) {
    totalIncome = totalIncome - ((totalIncome * 25) / 100);
}
let cleanIncome = totalIncome - ((totalIncome * 10) / 100);
if (cleanIncome >= vacationPrice) {
    let moneyLeft = cleanIncome - vacationPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
} else if (cleanIncome < vacationPrice) {
    let moneyNeeded = vacationPrice - cleanIncome;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
}
}
solve(["320", "8", "2", "5", "5", "1"])