function lift(input) {

    let peopleWaiting = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);
    let hasSeats = false;
    for (let i = 0; i < wagons.length; i++) {
        if (peopleWaiting === 0) {
            break;
        }
        while (wagons[i] < 4) {
            if (peopleWaiting === 0) {
                break;
            }
            wagons[i]++;
            peopleWaiting--;
        }
    }

    for (const wagon of wagons) {
        if (wagon !== 4) {
            hasSeats = true;
            break;
        }
    }
    let filledWagons = wagons.join(' ');
    if (hasSeats) {
        console.log(`The lift has empty spots!`)
        console.log(filledWagons);
    } else {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(filledWagons);
    }

}
lift([`20`, `0 2 0`
    ])