function solve(input) {

    let n = +input.shift();
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let currentNum = +input.shift();
        sum += currentNum;
    }
    let average = sum / n;
    console.log(average.toFixed(2));
}
solve([ '4', '3', '2', '4', '2' ])