function solve(input) {

    let vacationNeededMoney = +input.shift();
    let moneyAvailable = +input.shift();
    let action = input.shift();
    let currentSum = +input.shift();
    let timesSpend = 0;
    let days = 0;
    
    while (moneyAvailable < vacationNeededMoney && timesSpend < 5) {
    
        if (action === "save") {
            moneyAvailable += currentSum;
            timesSpend = 0;
        } else {
            moneyAvailable -= currentSum;
            timesSpend++;
        }
            
        if (moneyAvailable < 0) {
            moneyAvailable = 0;
        }
        days++;
        action = input.shift();
        currentSum = +input.shift();
    }
    if (timesSpend == 5) {
        console.log(`You can't save the money.`);
        console.log(days);
    }
    if (moneyAvailable >= vacationNeededMoney) {
        console.log(`You saved the money for ${days} days.`)
    }
   
}
solve([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ])