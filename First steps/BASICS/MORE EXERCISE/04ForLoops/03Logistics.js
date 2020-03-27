function solve(input) {
    let loadsCnt = Number(input.shift());
    let allLoads = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let allLoadsPrice = 0;
    for (let i = 1; i <= loadsCnt; i++) {
        let currentLoad = Number(input.shift());
        allLoads += currentLoad;
        if (currentLoad <= 3) {
            allLoadsPrice += currentLoad * 200;
            p1 += currentLoad;
        } else if (currentLoad >=4 && currentLoad <= 11) {
            allLoadsPrice += currentLoad * 175;
            p2 += currentLoad;
        } else {
            allLoadsPrice += currentLoad * 120;
            p3 += currentLoad;
        }
    }
    let p1Percent = p1 / allLoads * 100;
    let p2Percent = p2 / allLoads * 100;
    let p3Percent = p3 / allLoads * 100;
    console.log((allLoadsPrice / allLoads).toFixed(2));
    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
}
solve([ '5', '2', '10', '20', '1', '7' ])