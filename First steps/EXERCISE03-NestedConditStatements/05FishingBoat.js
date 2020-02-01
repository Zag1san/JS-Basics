function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());
    let discountPrice = 0;
    if (season === "Spring") {
        if (fishermen <= 6) {
            discountPrice = 3000 * 0.90;
        } else if (fishermen >= 7 && fishermen <= 11) {
            discountPrice = 3000 * 0.85;
        } else if (fishermen >= 12) {
            discountPrice = 3000 * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        if (fishermen <= 6) {
            discountPrice = 4200 * 0.90;
        } else if (fishermen >= 7 && fishermen <= 11) {
            discountPrice = 4200 * 0.85;
        } else if (fishermen >= 12) {
            discountPrice = 4200 * 0.75;
        }
    } else if (season === "Winter") {
        if (fishermen <= 6) {
            discountPrice = 2600 * 0.90;
        } else if (fishermen >= 7 && fishermen <= 11) {
            discountPrice = 2600 * 0.85;
        } else if (fishermen >= 12) {
            discountPrice = 2600 * 0.75;
        }
    }
    if (fishermen % 2 === 0 && season !== "Autumn") {
        discountPrice = discountPrice * 0.95;
    }
    if (budget >= discountPrice) {
        let moneyLeft = budget - discountPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = discountPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}
solve([ '3600', 'Autumn', '6'])