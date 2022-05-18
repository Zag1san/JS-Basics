function houseParty(inputArray) {

    let guestsArr = [];

    for (let i = 0; i < inputArray.length; i++) {

        let currentElArray = inputArray[i].split(' ');
        if (!currentElArray.includes('not')) {
            if (!guestsArr.includes(currentElArray[0])) {
                guestsArr.push(currentElArray[0]);
            } else {
                console.log(`${currentElArray[0]} is already in the list!`);
            }
        } else {
            if (guestsArr.includes(currentElArray[0])) {
                let index = guestsArr.indexOf(currentElArray[0]);
                guestsArr.splice(index, 1);
            } else {
                console.log(`${currentElArray[0]} is not in the list!`);
            }
        }

    }
    for (const name of guestsArr) {
        console.log(name);
    }
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']

);