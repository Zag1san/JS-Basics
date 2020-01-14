function solve(input) {
    let days = Number(input.shift());
    let cooks = Number(input.shift());
    let cakesPerDay = Number(input.shift());
    let wafflesPerDay = Number(input.shift());
    let pancakesPerDay = Number(input.shift());
    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;
    let totalCakes = days * cooks * cakesPerDay;
    let totalWaffles = days * cooks * wafflesPerDay;
    let totalPancakes = days * cooks * pancakesPerDay;
    let totalCakePrice = totalCakes * cakePrice;
    let totalWafflePrice = totalWaffles * wafflePrice;
    let totalPancakePrice = totalPancakes * pancakePrice;
    let totalIncome = totalCakePrice + totalWafflePrice + totalPancakePrice;
    let charity = totalIncome - (totalIncome / 8);
    console.log(charity.toFixed(2))
}
solve( ["20", "8", "14", "30", "16" ] )