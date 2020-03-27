function solve(input) {

    let num = Number(input.shift());
    let luckyNumber = "";

    for (let a = 1; a <= 9; a++) {
        if(a === num) {
            break;
        }
        for (let b = 1; b <= 9; b++) {
            if(b === num) {
                break;
            }
            for (let c = 1; c <= 9; c++) {
                if(c === num) {
                    break;
                }
                for (let d = 1; d <= 9; d++) {
                    if(d === num) {
                        break;
                    }
                    if(a + b === c + d && num % (a + b) === 0) {
                        luckyNumber += "" + a + b + c + d + " ";
                    }
                }
            }
        }

    }
    console.log(luckyNumber);

}
solve(['24'])