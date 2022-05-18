function solve(input) {

    let biggestNum = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++) {
        let currentArr = input[i];
        currentArr.sort((a, b) => a - b);
        let currentArrBiggest = currentArr[currentArr.length - 1];
        if (biggestNum < currentArrBiggest) {
            biggestNum = currentArrBiggest;
        }

    }
    return biggestNum;
}
solve([[20, 50, 10],
[8, 33, 145]]
)