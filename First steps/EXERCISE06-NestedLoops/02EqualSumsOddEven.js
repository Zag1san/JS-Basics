function solve(input) {

    let firstNum = +input.shift();
    let secondNum = + input.shift();
    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let l = 0; l < currentNum.length; l++) {
            let currentDigit = currentNum.charCodeAt(l);
            if (l % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum == evenSum) {
            printLine += i + " ";
        }
    }
    console.log(printLine)
}
solve(['100000', '100050', ''])