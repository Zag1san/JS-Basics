function dungeonestDark(stringInput) {

    let inputArray = stringInput[0].split('|');
    let healthBar = 100;
    let coins = 0;
    let roomCnt = 1;

    for (let i = 0; i < inputArray.length; i++) {
        let [room, points] = inputArray[i].split(' ');
        points = Number(points);
        if (room === 'potion' && healthBar + points <= 100) {
            healthBar += points;
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${healthBar} hp.`);
        } else if (room === 'potion' && healthBar + points > 100) {
            console.log(`You healed for ${100 - healthBar} hp.`);
            healthBar = 100;
            console.log(`Current health: ${healthBar} hp.`);
        } else if (room === 'chest') {
            console.log(`You found ${points} coins.`);
            coins += points;
        } else {
            healthBar -= points;
            if (healthBar > 0) {
                console.log(`You slayed ${room}.`);
            } else {
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${roomCnt}`);
                break;
            }
        }
        roomCnt++;
    }
    if (healthBar > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins} `);
        console.log(`Health: ${healthBar}`);

    }

}
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])