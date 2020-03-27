function solve(input) {

    let oneLevCnt = +input.shift();
    let twoLevCnt = +input.shift();
    let fiveLevCnt = +input.shift();
    let sum = +input.shift();

    for (let a = 0; a <= oneLevCnt; a++) {
        for (let b = 0; b <= twoLevCnt; b++) {
            for (let c = 0; c <= fiveLevCnt; c++) {
                if (a * 1 + b * 2 + c * 5 === sum) {
                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`)
                }
            }
        }
    }

}
solve(['3', '2', '3', '10', '', ''])