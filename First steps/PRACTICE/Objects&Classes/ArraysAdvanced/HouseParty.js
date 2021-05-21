function solve(input) {

    let guestsArr = [];

    for (let i = 0; i < input.length; i++) {
        let [name, sec, command] = input[i].split(" ")
        if (!guestsArr.includes(name) && command !== "not") {
            guestsArr.push(name);
        } else if (guestsArr.includes(name) && command == "not") {
            let removeIndex = guestsArr.indexOf(name)
            guestsArr.splice(removeIndex, 1);
        } else if (guestsArr.includes(name) && command !== "not") {
            console.log(`${name} is already in the list!`);
        } else if (!guestsArr.includes(name) && command == "not") {
            console.log(`${name} is not in the list!`);
        }

    }
    for (const name of guestsArr) {
        console.log(name);
    }

}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)