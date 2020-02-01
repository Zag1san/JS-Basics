function solve(input) {
    let days = Number(input.shift());
    let totalFoodKilograms = Number(input.shift());
    let dogFoodKilograms = Number(input.shift());
    let catFoodKilograms = Number(input.shift());
    let tortoisFoodGrams = Number(input.shift());
    let tortoisFoodKilograms = tortoisFoodGrams / 1000;
    let consumedFoodPerDay = dogFoodKilograms + catFoodKilograms + tortoisFoodKilograms;
    let totalConsumedFood = Math.ceil(days * consumedFoodPerDay);
    if (totalFoodKilograms >= totalConsumedFood) {
        let foodLeft = totalFoodKilograms - totalConsumedFood;
        console.log(`${Math.ceil(foodLeft)} kilos of food left.`);
    } else {
        let foodNeeded = totalConsumedFood - totalFoodKilograms;
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}
solve([ '5', '10', '2.1', '0.8', '321' ])