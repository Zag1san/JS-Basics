function gladiatorExpence(lostFightsCnt, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let shieldBreaks = 0;
    for (let i = 1; i <= lostFightsCnt; i++) {
        
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += shieldPrice;
            shieldBreaks += 1;
            if(shieldBreaks % 2 === 0 && shieldBreaks !== 0) {
                totalExpenses += armorPrice;
            }
        }
        

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpence(23, 12.50, 21.50, 40, 200)