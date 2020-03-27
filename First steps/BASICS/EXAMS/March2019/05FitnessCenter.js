function solve(input) {

    let people = +input.shift();
    let currentMan = input.shift();
    let backCnt = 0;
    let chestCnt = 0;
    let legCnt = 0;
    let absCnt = 0;
    let buysCnt = 0;
    let shakeCnt = 0;
    let proteinBarCnt = 0;
    let trainCnt = 0;

    for (let i = 0; i < people; i++) {
        switch (currentMan) {
            case "Back":
                trainCnt++;
                backCnt++;
                break;
            case "Chest":
                trainCnt++;
                chestCnt++;
                break;
            case "Legs":
                trainCnt++;
                legCnt++;
                break;
            case "Abs":
                trainCnt++;
                absCnt++;
                break;
            case "Protein shake":
                shakeCnt++;
                buysCnt++;
                break;
            case "Protein bar":
                proteinBarCnt++;
                buysCnt++;
                break;
        }
        currentMan = input.shift();
    }
    let percentageTrain = (trainCnt / people) * 100;
    let percentageBuy = (buysCnt / people) * 100;
    console.log(`${backCnt} - back`);
    console.log(`${chestCnt} - chest`);
    console.log(`${legCnt} - legs`);
    console.log(`${absCnt} - abs`);
    console.log(`${shakeCnt} - protein shake`);
    console.log(`${proteinBarCnt} - protein bar`);
    console.log(`${percentageTrain.toFixed(2)}% - work out`);
    console.log(`${percentageBuy.toFixed(2)}% - protein`);
}
solve([
    '10', 'Back',
    'Chest', 'Legs',
    'Abs', 'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs', ''
])