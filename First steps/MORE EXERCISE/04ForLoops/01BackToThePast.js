function solve(input) {
    let inheritMoney = Number(input.shift());
    let yearToLive = Number(input.shift());
    let ivanchoYears = 18;
    let spentMoney = 0;
    for(let i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            spentMoney += 12000;
            ivanchoYears += 1;
        } else {
            spentMoney += 12000 + 50 * ivanchoYears;
            ivanchoYears += 1;
        }
    }
    if (inheritMoney >= spentMoney) {
        let moneyLeft = inheritMoney - spentMoney;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        let moneyNeed = spentMoney - inheritMoney;
        console.log(`He will need ${moneyNeed.toFixed(2)} dollars to survive.`);
    }
}
solve([ '50000', '1802' ])