function bitcoinMining(input) {

    let oneBitcoin = 11949.16;
    let goldGram = 67.51;
    let daysCounter = 0;
    let currentDayGold = input.shift();
    let levaEarned = 0;
    let bitcoinsMinedToday = 0;
    let firstBitcoinDay = 0;
    let allBitcoins = 0;
    let timesBought = 0;

    while (currentDayGold !== undefined) {
        daysCounter++;
        if (daysCounter % 3 === 0) {
            currentDayGold *= 0.70;
        }
        levaEarned += currentDayGold * goldGram;
        if (levaEarned >= oneBitcoin) {
            bitcoinsMinedToday = Math.floor(levaEarned / oneBitcoin);
            levaEarned -= (bitcoinsMinedToday * oneBitcoin);
            timesBought++;
            allBitcoins += bitcoinsMinedToday;
        }
        if (timesBought === 1) {
            firstBitcoinDay = daysCounter;
        }

        currentDayGold = input.shift();
    }
    if (allBitcoins > 0) {
        console.log(`Bought bitcoins: ${allBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        console.log(`Left money: ${levaEarned.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${allBitcoins}`);
        console.log(`Left money: ${levaEarned.toFixed(2)} lv.`);
    }

}
bitcoinMining([3124.15, 504.212, 2511.124])