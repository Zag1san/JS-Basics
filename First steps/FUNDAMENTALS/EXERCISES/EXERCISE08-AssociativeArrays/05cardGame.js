function cardGame(input) {

    let playersObj = {};

    for (let line of input) {
        let lineArray = line.split(': ');
        let nameOfPlayer = lineArray[0];
        let deckOfCardsArray = lineArray[1].split(', ');

        if (playersObj[nameOfPlayer] === undefined) {
            playersObj[nameOfPlayer] = deckOfCardsArray;
        } else {
            let oldDeck = playersObj[nameOfPlayer];
            playersObj[nameOfPlayer] = oldDeck.concat(deckOfCardsArray);
        }

    }

    let playersKVP = Object.entries(playersObj);

    for (const kvp of playersKVP) {
        let playerSet = new Set(kvp[1]);
        playersObj[kvp[0]] = playerSet;
    }

    playersKVP = Object.entries(playersObj);

    for (const kvp of playersKVP) {
        let playerResult = accumulateCards(kvp[1]);
        console.log(`${kvp[0]}: ${playerResult}`);
    }

    function accumulateCards(set) {
        let arrayOfCards = [];
        for (const key of set) {
            let item = key;
            arrayOfCards.push(item);
        }
        let result = 0;

        for (let i = 0; i < arrayOfCards.length; i++) {
            let cardArray = arrayOfCards[i].split('');
            let power = cardArray.pop();
            let numberArray = cardArray;
            let number = '';
            let powerNumber = 0;

            if (numberArray.length > 1) {
                number = 10;
            } else {
                number = numberArray.shift();
            }
            if (number === 'A') {
                number = 14;
            } else if (number === 'J') {
                number = 11;
            } else if (number === 'Q') {
                number = 12;
            } else if (number === 'K') {
                number = 13;
            } else {
                number = Number(number);
            }

            switch (power) {
                case 'C':
                    powerNumber = 1;
                    break;
                case 'H':
                    powerNumber = 3;
                    break;
                case 'S':
                    powerNumber = 4;
                    break;
                case 'D':
                    powerNumber = 2;
                    break;

            }

            result += powerNumber * number;

        }
        return result;

    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)