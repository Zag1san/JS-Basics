function solve(input) {

    let tourCnt = +input.shift();
    let startingPoints  = +input.shift();
    let stage = input.shift()
    let pointsWon = 0;
    let tourWins = 0;
    
        for (let i = 1; i <= tourCnt; i++) {
            if (stage === "W") {
                pointsWon += 2000;
                tourWins++;
            } else if (stage === "F") {
                pointsWon += 1200;
            } else {
                pointsWon += 720;
            }
            stage = input.shift();
        }
        let allPoints = startingPoints + pointsWon;
        let averagePoints = pointsWon / tourCnt;
        let percentageWon = (tourWins / tourCnt) * 100;
        console.log(`Final points: ${allPoints}`)
        console.log(`Average points: ${Math.floor(averagePoints)}`)
        console.log(`${percentageWon.toFixed(2)}%`)
}
solve([
    '4', '750', 'SF',
    'W', 'SF',  'W',
    '',  ''
  ])