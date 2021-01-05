function solve(currentStock, orderedStock) {


    for (const index in currentStock) {
        if (index % 2 == !0) {
            currentStock[index] = Number(currentStock[index]);
        }
    }

    for (const index in orderedStock) {
        if (index % 2 == !0) {
            orderedStock[index] = Number(orderedStock[index]);
        }
    }

    let allStock = {};

    for (let i = 0; i < currentStock.length; i += 2) {

        let currentProduct = currentStock[i];
        let currentProductQuantity = currentStock[i + 1]
        allStock[currentProduct] = currentProductQuantity;


    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        let currentProduct = orderedStock[i];
        let currentProductQuantity = orderedStock[i + 1]
        if (allStock[currentProduct] === undefined) {
            allStock[currentProduct] = 0;

        }
        allStock[currentProduct] += currentProductQuantity;
    }

    for (const product in allStock) {
        console.log(`${product} -> ${allStock[product]}`);

    }


}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
