function solve(input) {
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let oneOutfitPrice = Number(input.shift());
    let setPrice = budget * 0.10;
    let totalOutfitPrice = statists * oneOutfitPrice;
    if (statists > 150) {
        totalOutfitPrice = totalOutfitPrice - (totalOutfitPrice * 0.10);
    }
    let expences = setPrice + totalOutfitPrice;
    let moneyLeft = budget - expences;
    let moneyNeeded = expences - budget;
    if (expences > budget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else if (expences <= budget) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}
solve([ "9587.88", "222", "55.68"])