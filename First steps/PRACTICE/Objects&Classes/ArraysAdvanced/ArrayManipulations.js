function solve(input) {

    let arrayToManipulate = input.shift().split(" ").map(Number);

    for (const sequence of input) {
        let [command, first, second] = sequence.split(" ");
        first = Number(first);
        second = Number(second);
        if (command == "Add") {
            arrayToManipulate.push(first);
        } else if (command == "Remove") {
            arrayToManipulate = arrayToManipulate.filter(x => x !== first);
        } else if (command == "RemoveAt") {
            arrayToManipulate.splice(first, 1);
        } else if (command == "Insert") {
            arrayToManipulate.splice(second, 0, first);
        }
    }
    console.log(arrayToManipulate.join(" "));

}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)