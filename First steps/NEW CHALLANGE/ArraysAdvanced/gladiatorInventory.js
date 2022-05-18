function gladiator(input) {

    let inventory = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {

        let [command, equipment] = input[i].split(" ");

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                let [newEquip, upgrade] = equipment.split("-")
                if (inventory.includes(newEquip)) {
                    let index = inventory.indexOf(newEquip);
                    let upgradedItem = `${newEquip}:${upgrade}`
                    inventory.splice(index + 1, 0, upgradedItem);
                }
                break;
        }
    }

    console.log(inventory.join(' '));

}
gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);