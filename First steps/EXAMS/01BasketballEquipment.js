function solve(input) {
    let yearTax = Number(input.shift());
    let shoes = yearTax * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let others = ball / 5;
    let allEqupment = yearTax + shoes + clothes + ball + others;
    console.log(allEqupment.toFixed(2));
}
solve(["320"])