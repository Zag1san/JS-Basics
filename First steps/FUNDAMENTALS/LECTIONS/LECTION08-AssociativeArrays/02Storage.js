function solve(input) {

let storage = new Map();

    input.forEach(element => {
        let [item, quantity] = element.split(" ");
        quantity = Number(quantity);
        if(storage.has(item)) {
            let oldQuantity = storage.get(item);
            storage.set(item, oldQuantity + quantity);

        } else {
            storage.set(item, quantity);
        }
    });

    for (const kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }


    // for (const key of storage.keys()) {
    //     console.log(`${key} -> ${storage.get(key)}`);
    // }

}
 solve(['tomatoes 10',
 'coffee 5',
 'olives 100',
 'coffee 40']
 )