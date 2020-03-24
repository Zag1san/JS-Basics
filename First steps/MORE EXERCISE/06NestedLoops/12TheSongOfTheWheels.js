function solve(input) {

    let controlNum = +input.shift();
    let combinations = "";
    let password = "";
    let counter = 0;
    let isFound = false;

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (a * b + c * d === controlNum && a < b && c > d) {
                        combinations += "" + a + b + c + d + " ";
                        counter++;
                        if (counter === 4) {
                            password += "" + a + b + c + d;
                            isFound = true;
                        }
                    }

                }
            }
        }
    }
    if (isFound) {
        console.log(combinations);
        console.log(`Password: ${password}`);
    } else if (!isFound && counter === 0) {
        console.log("No!");
    } else if (!isFound) {
        console.log(combinations);
        console.log("No!");
    }
}
solve([110])