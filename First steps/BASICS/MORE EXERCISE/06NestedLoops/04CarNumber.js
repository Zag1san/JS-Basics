function solve(input) {

    let startnumber = +input.shift();
    let finishNumber = +input.shift();
    let specialNumber = "";

        for(let a = startnumber; a <= finishNumber; a++) {
            for(let b = startnumber; b <= finishNumber; b++) {
                for(let c = startnumber; c <= finishNumber; c++) {
                    for(let d = startnumber; d <= finishNumber; d++) {
                        if((b + c) % 2 === 0 && a > d && (a % 2 === 0 && d % 2 === 1 || a % 2 === 1 && d % 2 === 0)) {
                            specialNumber += "" + a + b + c + d + " ";
                        }
                    }
                }
            }
        }
    console.log(specialNumber);
}
solve(["5", "8"])