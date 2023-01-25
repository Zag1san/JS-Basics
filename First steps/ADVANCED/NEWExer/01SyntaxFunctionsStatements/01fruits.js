function fruits(fruit, grams, price) {

    let kilonragmsOfFruit = grams / 1000;
    let totalPrice = kilonragmsOfFruit * price


    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilonragmsOfFruit.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80);