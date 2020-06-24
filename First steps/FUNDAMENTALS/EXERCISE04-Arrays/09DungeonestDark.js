function DungeonestDark(stringArray) {

    let rooms = stringArray[0].split("|")

    let health = 100;
    let coins = 0;
    let roomCounter = 0;

    for (let i = 0; i < rooms.length; i++) {
        roomCounter++;
        let currentRoom = rooms[i].split(" ")
        let action = currentRoom[0];
        let currentNumber = Number(currentRoom[1]);

        if (action === "potion") {
            health += currentNumber;
            if (health > 100) {
                currentNumber = 100 - (health - currentNumber);
                health = 100;
            }
            console.log(`You healed for ${currentNumber} hp.`);
            console.log(`Current health: ${health} hp.`);
            
        } else if (action === "chest") {
            coins += currentNumber;
            console.log(`You found ${currentNumber} coins.`);

        } else {
            health -= currentNumber;
            if (health > 0) {
                console.log(`You slayed ${action}.`);

            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }

        }

    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }

}
DungeonestDark([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])