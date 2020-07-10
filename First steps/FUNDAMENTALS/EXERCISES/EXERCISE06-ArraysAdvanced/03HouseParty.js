function houseParty(array) {

    let nameArray = [];


    for (let i = 0; i < array.length; i++) {
        let curentArr = array[i].split(" ");
        let name = curentArr[0];

        if (!curentArr.includes("not")) {

            if (!nameArray.includes(name)) {
                nameArray.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (nameArray.includes(name)) {
                nameArray = nameArray.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }

    }

    return nameArray.join('\n');


}
console.log(
    houseParty(['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!']
    )
);