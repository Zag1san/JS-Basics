function solve(input) {
    let firstResult = input.shift();
    let secondResult = input.shift();
    let thirdResult = input.shift();
    let first1 = Number(firstResult[0]);
    let first2 = Number(firstResult[2]);
    let second1 = Number(secondResult[0]);
    let second2 = Number(secondResult[2]);
    let third1 = Number(thirdResult[0]);
    let third2 = Number(thirdResult[2]);
    let wins = 0;
    let loses = 0;
    let draws = 0;
        if (first1 > first2) {
            wins += 1;
        } else if (first1 < first2) {
            loses += 1;
        } else {
            draws += 1;
        }
        if (second1 > second2) {
            wins += 1;
        } else if (second1 < second2) {
            loses += 1;
        } else {
            draws += 1;
        }
        if (third1 > third2) {
            wins += 1;
        } else if (third1 < third2) {
            loses += 1;
        } else {
            draws += 1;
        }
        console.log(`Team won ${wins} games.`);
        console.log(`Team lost ${loses} games.`);
        console.log(`Drawn games: ${draws}`);
}
solve(["0:2",
      "0:1",
    "3:3"
])