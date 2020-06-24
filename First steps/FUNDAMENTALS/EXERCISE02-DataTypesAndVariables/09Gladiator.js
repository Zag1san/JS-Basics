function gladiator(lostFightsCnt, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    
    
    let brokenHelmet = Math.floor(lostFightsCnt / 2);
    let brokenSword = Math.floor(lostFightsCnt / 3);
    let brokenShield = Math.floor(lostFightsCnt / 6);
    let brokenArmor = Math.floor(lostFightsCnt / 12);

    let expenses = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice);
    
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    
}
gladiator(23,
12.50,
21.50,
40,
200
    )