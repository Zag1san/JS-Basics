function solve(input) {

    let n = +input.shift();
    let current = 1;
    let isBigger = false;
    let currentLine = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            currentLine += current + " ";
            current++;
        }
        console.log(currentLine);
        currentLine = "";
        if (isBigger) {
            break;
        }
    }

}
solve(["7"])