function solve(input) {
    let magnoliaNum = Number(input.shift());
    let hyacinthNum = Number(input.shift());
    let rosesNum = Number(input.shift());
    let cactusNum = Number(input.shift());
    let giftPrice = Number(input.shift());
    let magnoliaPrice = 3.25;
    let hyacintPrice = 4;
    let rosesPrice = 3.5;
    let cactusPrice = 8;
    let magnoliaIncome = magnoliaNum * magnoliaPrice;
    let hyacinthIncome = hyacinthNum * hyacintPrice;
    let rosesIncome = rosesNum * rosesPrice;
    let cactusIncome = cactusNum * cactusPrice;
    let totalTaxFreeIncome = (magnoliaIncome + hyacinthIncome + rosesIncome + cactusIncome) * 0.95;
    if (giftPrice <= totalTaxFreeIncome) {
        let incomeLeft = totalTaxFreeIncome - giftPrice;
        console.log(`She is left with ${Math.floor(incomeLeft)} leva.`)
    } else {
        let moneyToBorrow = giftPrice - totalTaxFreeIncome;
        console.log(`She will have to borrow ${Math.ceil(moneyToBorrow)} leva.`)
    }
}
solve([ '15', '7', '5', '10', '100' ])