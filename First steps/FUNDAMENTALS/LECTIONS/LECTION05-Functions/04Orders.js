function orders(product, quantity) {

    let result = 0;
    switch (product){
        case "coffee":
            result = quantity * 1.5;
            return result.toFixed(2);

            break;
        case "coke":
            result = quantity * 1.4;
            return result.toFixed(2);

            break;
        case "water":
            result = quantity * 1;
            return result.toFixed(2);

            break;
        case "snacks":
            result = quantity * 2;
            return result.toFixed(2);
            break;
    }

}
let result = orders("water", 5);
console.log(result);
