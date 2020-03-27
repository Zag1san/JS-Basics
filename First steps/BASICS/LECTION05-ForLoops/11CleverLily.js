function solve(input) {

    let age = Number(input.shift());
    let moneyForWasher = Number(input.shift());
    let singleToyPrice = Number(input.shift());
    let toysCnt = 0;
    let birthdayMoney = 0;
    let incomingMoney = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            birthdayMoney += incomingMoney; 
            incomingMoney += 10
            birthdayMoney -= 1
        } else {
            toysCnt += 1;
        }
    }
    let toyMoney = toysCnt * singleToyPrice;
    let totalMoney = birthdayMoney + toyMoney;
    if (totalMoney >= moneyForWasher) {
        let moneyLeft = totalMoney - moneyForWasher;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeed = Math.abs(totalMoney - moneyForWasher);
        console.log(`No! ${moneyNeed.toFixed(2)}`);
    }
}
solve([ '21', '1570.98', '3' ])