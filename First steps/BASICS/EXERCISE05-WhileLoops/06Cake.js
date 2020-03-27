function solve(input) {

    let w = +input.shift();
    let l = +input.shift();
    let cakeSize = w * l;
    let isStoped = false;
    let piecesTaken = 0;
    let cakeLeft = cakeSize;
    while (cakeLeft > 0) {
        let pieces = input.shift();
        if (pieces !== "STOP") {
            pieces = +pieces;
            cakeLeft -= pieces;
            piecesTaken += pieces;
        } else {
            isStoped = true;
            break;
        }
        
    }
    if (isStoped) {
        console.log(`${cakeLeft} pieces are left.`);
    } else {
        let piecesMore = Math.abs(cakeSize - piecesTaken);
        console.log(`No more cake left! You need ${piecesMore} pieces more.`);
    }

}
solve([
    '10', '10',
    '20', '20',
    '20', '20',
    '21'
  ])