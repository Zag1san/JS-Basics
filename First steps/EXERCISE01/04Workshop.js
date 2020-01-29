function solve(input) {
    let tables = Number(input.shift());
    let tableLength = Number(input.shift());
    let tableWidth = Number(input.shift());
    let usd = 1.85;
    let tableCloth = tables * (tableLength + 2 * 0.30) * (tableWidth + 2 * 0.30);
    let square = tables * (tableLength / 2) * (tableLength / 2);
    let clothPrice = tableCloth * 7;
    let squarePrice = square * 9;
    let orderUSD = clothPrice + squarePrice;
    let orderBGN = orderUSD * usd;
    console.log(orderUSD.toFixed(2), "USD");
    console.log(orderBGN.toFixed(2), "BGN");
    
}
solve([ "10", "1.20", "0.65"] )