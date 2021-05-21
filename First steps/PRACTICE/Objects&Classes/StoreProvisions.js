function solve(currentStock, orderedStock) {

    let finalStock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        let currentProductQuantity = Number(currentStock[i + 1]);
        finalStock[currentProduct] = currentProductQuantity;
        
    }
 
    for (let i = 0; i < orderedStock.length; i+=2) {
        let orderdProduct = orderedStock[i];
        let quantity = Number(orderedStock[i + 1]);
        if(finalStock[orderdProduct]=== undefined) {
            finalStock[orderdProduct] = 0;
        }
        finalStock[orderdProduct] += quantity
    }

    for (const product in finalStock) {
        console.log(`${product} -> ${finalStock[product]}`);
       }


}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
