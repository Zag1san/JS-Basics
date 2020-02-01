function solve(input) {
    let budget = Number(input.shift());
    let ticketCat = input.shift();
    let numPeople = Number(input.shift());
    let budgetLeft = 0;
    let moneyForTickets = 0;
    let vipTicket = 499.99;
    let normalTicket = 249.99;
    let moneyLeft = 0;
    let moneyNeed = 0;
    switch (ticketCat) {
        case "VIP":
            moneyForTickets = numPeople * vipTicket;
            if (numPeople >= 1 && numPeople <= 4) {
                budgetLeft = budget * 0.25;
            } else if (numPeople >= 5 && numPeople <= 9) {
                budgetLeft = budget * 0.40;
            } else if (numPeople >= 10 && numPeople <= 24) {
                budgetLeft = budget * 0.50;
            } else if (numPeople >= 25 && numPeople <= 49) {
                budgetLeft = budget * 0.60;
            } else {
                budgetLeft = budget * 0.75
            }
            ; break;
        case "Normal":
            moneyForTickets = numPeople * normalTicket;
            if (numPeople >= 1 && numPeople <= 4) {
                budgetLeft = budget * 0.25;
            } else if (numPeople >= 5 && numPeople <= 9) {
                budgetLeft = budget * 0.40;
            } else if (numPeople >= 10 && numPeople <= 24) {
                budgetLeft = budget * 0.50;
            } else if (numPeople >= 25 && numPeople <= 49) {
                budgetLeft = budget * 0.60;
            } else {
                budgetLeft = budget * 0.75
            }
            ; break;
    }
    if (budgetLeft > moneyForTickets) {
        moneyLeft = budgetLeft - moneyForTickets;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeed = moneyForTickets - budgetLeft;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`)
    }
}
solve([ '30000', 'VIP', '49' ])