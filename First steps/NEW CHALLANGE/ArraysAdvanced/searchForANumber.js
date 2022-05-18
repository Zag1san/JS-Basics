function searchNumber(firstArray, secondArray) {


    let countToTakeFromArray = secondArray[0];
    let coutToCut = secondArray[1];
    let searchedNumber = secondArray[2];


    let newArray = firstArray.slice(0, countToTakeFromArray);
        newArray.splice(0, coutToCut);
    let count = 0;

    for (const num of newArray) {
        if(num == searchedNumber) {
            count++;
        }
    }


    console.log(`Number ${searchedNumber} occurs ${count} times.`);

}
searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );