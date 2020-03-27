function solve(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let lengthSm = length * 100;
    let widthSm = width * 100;
    let deckWidth = 70;
    let deckLenghth = 120;
    let deckInRow = Math.floor((widthSm - 100) / deckWidth);
    let deckRows = Math.floor(lengthSm / deckLenghth);
    let totalDecks = deckInRow * deckRows - 3;
    console.log(totalDecks)

}
solve( [ "15", "8.9" ] )