function solve(input) {

    let numCnt = +input.shift();
    let max = Number.MIN_SAFE_INTEGER
    let currentNum = +input.shift();
    let counter = 0
    while (counter < numCnt) {
        
        if(currentNum > max) {
            max = currentNum;
        }
        currentNum = +input.shift();
        counter++;
    }
    console.log(max)
}
solve([ '3', '-10', '20', '-30' ])