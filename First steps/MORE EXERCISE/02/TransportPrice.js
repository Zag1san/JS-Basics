function solve(input) {
    let kilometers = Number(input.shift());
    let time = input.shift();
    let dayTaxiPay = 0.70 + (kilometers * 0.79);
    let nightTaxiPay = 0.70 + (kilometers * 0.90);
    let busPay = kilometers * 0.09;
    let trainPay = kilometers * 0.06;
    if (kilometers < 20 && time === "day") {
        console.log(dayTaxiPay.toFixed(2));
    } else if (kilometers < 20 && time === "night") {
        console.log(nightTaxiPay.toFixed(2));
    } else if (kilometers < 100){
        console.log(busPay.toFixed(2));
    } else if (kilometers >= 100) {
        console.log(trainPay.toFixed(2))
    } 
}
solve(["180", "night"])