function solve(firstInput, secondInput) {

    let numbersToTake = secondInput[0];
    let numbersToDelete = secondInput[1];
    let searchedNumber = secondInput[2];

    let resultArr = firstInput.slice(0, numbersToTake);
        resultArr.splice(0, numbersToDelete);
        

    // for (const number of restOfArr) {
    //     arrayleft.push(number);
    // }
    // let counter = 0
    // for (const num of arrayleft) {
    //     if (num === searchedNumber) {
    //         counter++;
    //     }
    // }

    console.log(restOfArr);
   // console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)