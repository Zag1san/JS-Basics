function solve(numArray, comandArray) {
    function sumPairs(arr) {
        let summedArr = []
        for (let i = 0; i < arr.length; i += 2) {
            let summedPair = 0
            if (arr[i + 1] === undefined) {
                summedPair = arr[i];
            } else {
                summedPair = arr[i] + arr[i + 1];
            }
            summedArr.push(summedPair);
        }
        return summedArr
    }
    for (let i = 0; i < comandArray.length; i++) {
        let elementArr = comandArray[i].split(" ");
        let command = elementArr[0];
        let index = Number(elementArr[1]);
        let rest = elementArr.slice(2).map(Number);

        switch (command) {
            case "add":
                for (const el of rest) {
                    numArray.splice(index, 0, el);
                }
                break;

            case "addMany":

                numArray.splice(index, 0, ...rest);

                break;
            case "contains":

                let indexOfElement = numArray.indexOf(index);
                console.log(indexOfElement);
                break;
            case "shift":
                for (let i = 0; i < index; i++) {
                    let firstEl = numArray.shift();
                    numArray.push(firstEl);

                }
                break;
            case "remove":
                numArray.splice(index, 1)
                break;
            case "sumPairs":
                numArray = sumPairs(numArray);
                break;
            case "print":
                console.log(`[ ${numArray.join(", ")} ]`);
                break;

        }
        if (command === "print") {
            break;
        }
    }

}

solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);