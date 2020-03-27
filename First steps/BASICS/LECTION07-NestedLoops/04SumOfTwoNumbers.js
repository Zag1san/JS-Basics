function solve(input) {

    let num1 = +input.shift();
    let num2 = +input.shift();
    let magicNum = +input.shift();
    let counter = 0;
    let isFound = false;

    for (let a = num1; a <= num2; a++) {
        
        for( let b = num1; b <= num2; b++) {
            counter++;
            if (a + b === magicNum) {
                isFound = true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
    
}
solve([ '88', '888', '1000' ])