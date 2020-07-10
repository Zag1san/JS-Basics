function solve(stringArray) {

    let list = stringArray.shift();
    let shoppingList = list.split("!");
    let commandLine = stringArray.shift();

    while (commandLine !== "Go Shopping!") {

        let [command, product, extraProduct] = commandLine.split(" ")

        switch (command) {
            case "Unnecessary":
                unnecessaryProduct(shoppingList, product);
                break;
            case "Urgent":
                urgentProduct(shoppingList, product);
                break;
            case "Correct":
                correctProducts(shoppingList, product, extraProduct);
                break;
            case "Rearrange":
                rearrange(shoppingList, product);
                break;
        }

        commandLine = stringArray.shift();
    }

    function urgentProduct(list, product) {
        if (list.includes(product)) {
            return;
        }
        list.unshift(product);
    }

    function unnecessaryProduct(list, product) {
        if (list.includes(product)) {
            let productIndex = list.indexOf(product);
            list.splice(productIndex, 1);
        } else {
            return;
        }

    }

    function correctProducts(list, oldProduct, newProduct) {
        if (list.includes(oldProduct)) {
            let indexOfOldProduct = list.indexOf(oldProduct);
            list.splice(indexOfOldProduct, 1, newProduct);
        } else {
            return;
        }

    }

    function rearrange(list, product) {
        if (list.includes(product)) {
            let indexOfProduct = list.indexOf(product);
            list.splice(indexOfProduct, 1);
            list.push(product);
        } else {
            return;
        }

    }

    console.log(shoppingList.join(", "));

}
solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);