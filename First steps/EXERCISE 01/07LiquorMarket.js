function solve(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());
    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - (rakiaPrice * 40) / 100;
    let beerPrice = rakiaPrice - (rakiaPrice * 80) / 100;
    let totalWhiskeyPrice = whiskeyLiters * whiskeyPrice;
    let totalBeerPrice = beerLiters * beerPrice;
    let totalWinePrice = wineLiters * winePrice;
    let totalRakiaPrice = rakiaLiters * rakiaPrice;
    let totalCash = totalBeerPrice + totalRakiaPrice + totalWhiskeyPrice + totalWinePrice;
    console.log(totalCash.toFixed(2))
}
solve(["50", "10", "3.5", "6.5", "1"])