function mergeArrays(firstStrArray, secondStrArray) {

    let resultArray = [];

    for (let i = 0; i < firstStrArray.length; i++) {
        if(i % 2 === 0) {
            resultArray.push(Number(firstStrArray[i]) + Number(secondStrArray[i]));
        } else {
            resultArray.push(firstStrArray[i] + secondStrArray[i])
        }
        
    }
    console.log(resultArray.join(' - '));

}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

);