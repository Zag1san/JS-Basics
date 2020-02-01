function solve(input) {
    let flowerType = input.shift();
    let numflowers = Number(input.shift());
    let budget = Number(input.shift());
    let moneySpent = 0;
    if (flowerType === "Roses") {
        if (numflowers > 80) {
            moneySpent = (numflowers * 5) * 0.90;
        } else {
            moneySpent = numflowers * 5;
        }
    } else if (flowerType === "Dahlias") {
        if (numflowers > 90) {
            moneySpent = (numflowers * 3.80) * 0.85;
        } else {
            moneySpent = numflowers * 3.80;
        }
    } else if (flowerType === "Tulips") {
        if (numflowers > 80) {
            moneySpent = (numflowers * 2.80) * 0.85;
        } else {
            moneySpent = numflowers * 2.80;
        }
    } else if (flowerType === "Narcissus") {
        if (numflowers < 120) {
            moneySpent = (numflowers * 3) * 1.15;
        } else {
            moneySpent = numflowers * 3;
        }
    } else if (flowerType === "Gladiolus") {
        if (numflowers < 80) {
            moneySpent = (numflowers * 2.50) * 1.20;
        } else {
            moneySpent = numflowers * 2.50;
        }
    }
    if (budget >= moneySpent) {
        let moneyLeft = budget - moneySpent;
        console.log(`Hey, you have a great garden with ${numflowers} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < moneySpent) {
        let moneyNeeded = moneySpent - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

solve(['Gladiolus', '64', '160'])