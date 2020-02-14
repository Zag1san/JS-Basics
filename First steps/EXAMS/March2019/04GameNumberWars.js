function solve(input) {

    let playerOne = input.shift();
    let playerTwo = input.shift();
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let isNumberWars = false;
    let winner = "";
    let commandOne = input.shift();
    let commandTwo = input.shift();
    while (commandOne !== "End of game") {
        let playerOneCard = +commandOne;
        let playerTwoCard = +commandTwo;
        if (playerOneCard > playerTwoCard) {
            playerOnePoints += playerOneCard - playerTwoCard;
        } else if (playerOneCard < playerTwoCard) {
            playerTwoPoints += playerTwoCard - playerOneCard;
        } else {
            isNumberWars = true;
            playerOneCard = +input.shift();
            playerTwoCard = +input.shift();
            if (playerOneCard > playerTwoCard) {
                winner = playerOne;
            } else {
                winner = playerTwo;
            }
            break;
        }

        commandOne = input.shift();
        commandTwo = input.shift();
    }
    if (isNumberWars) {
        console.log(`Number wars!`);
        if (winner === playerOne) {
            console.log(`${winner} is winner with ${playerOnePoints} points`);
        } else {
            console.log(`${winner} is winner with ${playerTwoPoints} points`);
        }
    } else {
        console.log(`${playerOne} has ${playerOnePoints} points`);
        console.log(`${playerTwo} has ${playerTwoPoints} points`);
    }
}
solve([
    'Desi', 'Niki', '7',
    '5',    '3',    '4',
    '3',    '3',    '5',
    '3',    '',     ''
  ])