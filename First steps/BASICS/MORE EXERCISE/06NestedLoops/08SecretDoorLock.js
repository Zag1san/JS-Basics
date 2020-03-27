function solve(input) {

    let firstNum = +input.shift();
    let secondNum = +input.shift();
    let thirdNum = +input.shift();

        for(let a = 1; a <= firstNum; a++) {
            for(let b = 1; b <= secondNum; b++) {
                for(let c = 1; c <= thirdNum; c++) {
                    if(a % 2 === 0 && c % 2 === 0 && (b === 2 || b === 3 || b === 5 || b === 7)) {
                        console.log(`${a} ${b} ${c}`);
                    }
                }
            }
        }
    
}
solve([3, 5, 5])