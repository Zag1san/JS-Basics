
function solve(fruit, weigth, price) {

    let weightInKg = (weigth / 1000);
    let priceForFruit = (weightInKg * price);


    console.log(`I need $${(priceForFruit).toFixed(2)} to buy ${(weightInKg).toFixed(2)} kilograms ${fruit}.`);
}
solve('apple', 1563, 2.35)