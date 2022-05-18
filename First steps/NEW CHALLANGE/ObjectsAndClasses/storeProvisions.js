function provisions(storeProducts, orderedProducts) {

    let productsObj = {};

    for (let i = 0; i < storeProducts.length; i += 2) {

        productsObj[storeProducts[i]] = Number(storeProducts[i + 1]);

    }
    for (let i = 0; i < orderedProducts.length; i += 2) {
        if (productsObj[orderedProducts[i]] === undefined) {
            productsObj[orderedProducts[i]] = Number(orderedProducts[i + 1]);
        } else {
            productsObj[orderedProducts[i]] += Number(orderedProducts[i + 1])
        }


    }
    for (const key in productsObj) {
        console.log(`${key} -> ${productsObj[key]}`);
    }
}
provisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)