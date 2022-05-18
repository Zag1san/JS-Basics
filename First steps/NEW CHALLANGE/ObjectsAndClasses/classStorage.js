function solve() {

    class Storage {

        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;

        }
        addProduct(product) {
            let currentProduct = {};
            currentProduct.name = product.name;
            currentProduct.price = product.price;
            currentProduct.quantity = product.quantity;
            this.totalCost += currentProduct.price * currentProduct.quantity;
            this.capacity -= currentProduct.quantity;
            this.storage.push(currentProduct);

        }
        getProducts() {
            let result = [];
            for (const element of this.storage) {
                console.log(JSON.stringify(element));
                result.push(JSON.stringify(element));
            }

            return result.join('\n');
        }


    }
    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);


}
solve()