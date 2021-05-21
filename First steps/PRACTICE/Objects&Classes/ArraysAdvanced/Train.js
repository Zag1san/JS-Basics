function solve(input) {

    let existingWagons = input.shift().split(" ").map(Number);
    let maxPassengers = Number(input.shift());
   
    for (let i = 0; i < input.length; i++) {
        let [first, second] = input[i].split(" ");
        if (first === "Add") {
            second = Number(second);
            existingWagons.push(second);
        } else {
            first = Number(first);
            for (let i = 0; i < existingWagons.length; i++) {
                if (existingWagons[i] + first <= maxPassengers) {
                    existingWagons[i] += first
                    break;
                }

            }
        }
    }

    console.log(existingWagons.join(" "));
}


solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)