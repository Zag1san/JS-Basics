function solve(input) {

    let inventory = input[0].split(" ");

    for (let i = 1; i < input.length; i++) {
        let [command, item] = input[i].split(" ");
        if (command === "Buy" && !inventory.includes(item)) {
            inventory.push(item);
        } else if (command === "Trash" && inventory.includes(item)) {
            let indexOfItem = inventory.indexOf(item);
            inventory.splice(indexOfItem, 1);
        } else if (command === "Repair" && inventory.includes(item)) {
            let indexOfItem = inventory.indexOf(item);
            let repairedItem = inventory.splice(indexOfItem, 1);
            inventory.push(repairedItem[0]);
        } else if (command === "Upgrade") {
            let [newItem, upgrade] = item.split("-");
            if (inventory.includes(newItem)) {
                let indexOfItem = inventory.indexOf(newItem);
                inventory.splice(indexOfItem + 1, 0, `${newItem}:${upgrade}`);
            }
        }

    }
console.log(inventory.join(" "));

}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)