function solve(input) {

    let numCnt = +input.shift();
    let min = Number.MAX_SAFE_INTEGER
    let currentNum = +input.shift();
    let counter = 0
    while (counter < numCnt) {
        
        if(currentNum < min) {
            min = currentNum;
        }
        currentNum = +input.shift();
        counter++;
    }
    console.log(min)
}
solve([ '4', '45', '-20', '7', '99' ])