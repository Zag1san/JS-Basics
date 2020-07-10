function solve(arr1, arr2) {

    let resultArray = arr1.slice(0, arr2[0]);

    resultArray.splice(0, arr2[1]);

    let searchedNumber = arr2[2];
    let counter = 0
    for (const number of resultArray) {
        if(searchedNumber === number) {
            counter++;
        }
    }

    return `Number ${searchedNumber} occurs ${counter} times.`;


}
console.log(
    solve([5, 2, 3, 4, 1, 6],
        [5, 2, 3]
    )
);