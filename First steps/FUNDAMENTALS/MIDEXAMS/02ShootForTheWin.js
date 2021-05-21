function solve(input) {

    let targets = input.shift().split(" ").map(Number);
    let command = input.shift();
    let targetsShot = 0

    while (command !== "End") {

        let index = +command;
        if (index >= targets.length) {
            index = 0;
        } else {
            let currentValue = targets[index];
            if (targets[index] !== - 1) {
                targets[index] = - 1;
                targetsShot++;
            }
            for (let index in targets) {
                if (targets[index] !== -1 && targets[index] <= currentValue) {
                    targets[index] += currentValue;
                } else if (targets[index] !== -1 && targets[index] > currentValue) {
                    targets[index] -= currentValue;
                }
            }
        }
        command = input.shift();

    }

    let resultTargets = targets.join(" ");

    console.log(`Shot targets: ${targetsShot} -> ${resultTargets}`);

}
solve([`30 30 12 60 54 66`,
    `5`,
    `2`,
    `4`,
    `0`,
    `End`])
    ;