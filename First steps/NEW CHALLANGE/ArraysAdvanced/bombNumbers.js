function bombNumbers(numArr, bombArr) {

    let result = numArr.slice(0);

    let powerOfBomb = bombArr[1];
    let bobmNumber = bombArr[0];

    while (result.includes(bobmNumber)) {
        let bombIndex = result.indexOf(bobmNumber);
        let startIndex = Math.max(bombIndex - powerOfBomb, 0);
        result.splice(bombIndex, powerOfBomb + 1)
        result.splice(startIndex, powerOfBomb);

    }

    let sumOfNumbers = 0;

    for (const number of result) {
        sumOfNumbers += number;
    }

    console.log(sumOfNumbers);
}

bombNumbers([
    1, 1, 2, 1, 1,
    1, 2, 1, 1, 1],
    [2, 1]
)