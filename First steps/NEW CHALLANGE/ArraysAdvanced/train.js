function train(inputArray) {

    let clonedArray = inputArray.slice();

    let existingWagons = clonedArray.shift().split(' ').map(x => Number(x));
    let maxCapacity = Number(clonedArray.shift());

    for (let element of clonedArray) {

        let [command, number] = element.split(' ');

        if (command === 'Add') {
            existingWagons.push(Number(number));
        } else {
            command = Number(command)
            for (let i = 0; i < existingWagons.length; i++) {

                if (existingWagons[i] + command <= maxCapacity) {
                    existingWagons[i] += command;
                    break;
                }
            }
        }

    }

    console.log(existingWagons.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);