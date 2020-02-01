function solve(input) {
    let chrysantNum = Number(input.shift());
    let rosesNum = Number(input.shift());
    let tulipNum = Number(input.shift());
    let season = input.shift();
    let holiday = input.shift();
    let flowerCnt = chrysantNum + rosesNum + tulipNum;
    let totalFlowerSum = 0;
    if (season === "Spring" || season === "Summer") {
        if (holiday === "Y") {
            totalFlowerSum = chrysantNum * 2 + rosesNum * 4.1 + tulipNum * 2.5;
            totalFlowerSum = totalFlowerSum * 1.15;
        } else {
            totalFlowerSum = chrysantNum * 2 + rosesNum * 4.1 + tulipNum * 2.5;
        } if (tulipNum > 7) {
            totalFlowerSum = totalFlowerSum * 0.95;
        }
    } else if (season === "Autumn" || season === "Winter") {
        if (holiday === "Y") {
            totalFlowerSum = chrysantNum * 3.75 + rosesNum * 4.5 + tulipNum * 4.15;
            totalFlowerSum = totalFlowerSum * 1.15;
        } else {
            totalFlowerSum = chrysantNum * 3.75 + rosesNum * 4.5 + tulipNum * 4.15;
        } if (rosesNum >= 10 && season === "Winter") {
            totalFlowerSum = totalFlowerSum * 0.90;
        }
    }
    if (flowerCnt > 20) {
        totalFlowerSum = totalFlowerSum * 0.80;
    }
    let totalSum = totalFlowerSum + 2;
    console.log(totalSum.toFixed(2))
}
    solve([ '10', '10', '10', 'Autumn', 'N' ])