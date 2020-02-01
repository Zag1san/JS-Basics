function solve(input) {
    let fuelType = input.shift();
    let fuelQuantity = Number(input.shift());
    let discountCard = input.shift();
    let gasolinePricePerLiter = 2.22;
    let dieselPricePerLiter = 2.33;
    let gasPricePerLiter = 0.93;
    let totalPrice = 0;
    if (fuelType === "Gas") {
        if (discountCard === "Yes") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                gasPricePerLiter = (gasPricePerLiter - 0.08) * 0.92;
                totalPrice = gasPricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                gasPricePerLiter = (gasPricePerLiter - 0.08) * 0.90;
                totalPrice = gasPricePerLiter * fuelQuantity;
            } else {
                gasPricePerLiter = gasPricePerLiter - 0.08;
                totalPrice = gasPricePerLiter * fuelQuantity;
            }
        } else if (discountCard === "No") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                gasPricePerLiter = gasPricePerLiter * 0.92;
                totalPrice = gasPricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                gasPricePerLiter = gasPricePerLiter * 0.90;
                totalPrice = gasPricePerLiter * fuelQuantity;
            } else {
                totalPrice = gasPricePerLiter * fuelQuantity;
            }
        }
    } else if (fuelType === "Gasoline") {
        if (discountCard === "Yes") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                gasolinePricePerLiter = (gasolinePricePerLiter - 0.18) * 0.92;
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                gasolinePricePerLiter = (gasolinePricePerLiter - 0.18) * 0.90;
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            } else {
                gasolinePricePerLiter = gasolinePricePerLiter - 0.18;
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            }
        } else if (discountCard === "No") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                gasolinePricePerLiter = gasolinePricePerLiter * 0.92;
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                gasolinePricePerLiter = gasolinePricePerLiter * 0.90;
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            } else {
                totalPrice = gasolinePricePerLiter * fuelQuantity;
            }
        }
    } else if (fuelType === "Diesel") {
        if (discountCard === "Yes") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                dieselPricePerLiter = (dieselPricePerLiter - 0.12) * 0.92;
                totalPrice = dieselPricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                dieselPricePerLiter = (dieselPricePerLiter - 0.12) * 0.90;
                totalPrice = dieselPricePerLiter * fuelQuantity;
            } else {
                dieselPricePerLiter = dieselPricePerLiter - 0.12;
                totalPrice = dieselPricePerLiter * fuelQuantity;
            }
        } else if (discountCard === "No") {
            if (fuelQuantity >= 20 && fuelQuantity <= 25) {
                dieselPricePerLiter = dieselPricePerLiter * 0.92;
                totalPrice = dieselPricePerLiter * fuelQuantity;
            } else if (fuelQuantity > 25) {
                dieselPricePerLiter = dieselPricePerLiter * 0.90;
                totalPrice = dieselPricePerLiter * fuelQuantity;
            } else {
                totalPrice = dieselPricePerLiter * fuelQuantity;
            }
        }
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
solve(['Diesel', '19', 'No'])
