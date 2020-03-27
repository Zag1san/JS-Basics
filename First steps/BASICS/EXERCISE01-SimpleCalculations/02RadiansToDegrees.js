function solve(input) {
    let rad = Number(input.shift());
    let degree = rad * 180 / Math.PI;
    console.log(degree.toFixed(0));
}
solve(["3.1416"])