function solve(productsArr) {

let sortedProducts = productsArr.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`);
        
    }
}
 solve(["Potatoes", "Tomatoes", "Onions", "Apples"])
