function solve(input) {
    let capacity = Number(input.shift());
    let fansCnt = Number (input.shift());
    let capacityPercentage = fansCnt / capacity * 100;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    for (let i = 1; i <= fansCnt; i++) {
        let sectorOffan = input.shift();
        switch (sectorOffan) {
            case "A": 
            sectorA += 1;
            break;
            case "B": 
            sectorB += 1;          
            break;
            case "V": 
            sectorV += 1;
            break;
            case "G": 
            sectorG += 1;
            break;
        }
    }
    let percentageA = sectorA / fansCnt * 100;
    let percentageB = sectorB / fansCnt * 100;
    let percentageV = sectorV / fansCnt * 100;
    let percentageG = sectorG / fansCnt * 100;
    console.log(`${percentageA.toFixed(2)}%`);
    console.log(`${percentageB.toFixed(2)}%`);
    console.log(`${percentageV.toFixed(2)}%`);
    console.log(`${percentageG.toFixed(2)}%`);
    console.log(`${capacityPercentage.toFixed(2)}%`);
}
solve([
    '1000', '12', 'A',
    'A',    'V',  'V',
    'A',    'G',  'A',
    'A',    'V',  'G',
    'V',    'A'
  ])