function solve(input) {
    let volume = Number(input.shift());
    let pipeOne = Number(input.shift());
    let pipeTwo = Number(input.shift());
    let hours = Number(input.shift());
    let pipeOneFill = pipeOne * hours;
    let pipeTwoFill = pipeTwo * hours;
    let twoPipesFill = pipeOneFill + pipeTwoFill;
    let overflow = 0;
    let percentageOfPoolFilled = ((twoPipesFill * 100) /volume).toFixed(2);
    let percentageOfPipeOne = ((pipeOneFill * 100) / twoPipesFill).toFixed(2);
    let percentageOfPipeTwo = ((pipeTwoFill * 100) / twoPipesFill).toFixed(2);
    if (twoPipesFill <= volume) {
        console.log(`The pool is ${percentageOfPoolFilled}% full. Pipe 1: ${percentageOfPipeOne}%. Pipe 2: ${percentageOfPipeTwo}%.`);
    } else if (twoPipesFill > volume) {
        overflow = twoPipesFill - volume;
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }    
}
solve(["100", "100", "100", "2.5"])