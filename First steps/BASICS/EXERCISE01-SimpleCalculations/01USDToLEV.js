function solve(input) {
    let usd = Number(input.shift());
    let bgn = 1.79549;
    let convert = usd * bgn;
    console.log(convert.toFixed(2));
}
solve(["20"])
