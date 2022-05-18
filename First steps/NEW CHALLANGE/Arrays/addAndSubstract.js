function addAndSubstract(arrayOfNumbers) {

let newArray = [];
let originalArraySum = 0;
let newArraySum = 0;

    for (const index in arrayOfNumbers) {
        originalArraySum += arrayOfNumbers[index];
        if(arrayOfNumbers[index] % 2 === 0) {
            arrayOfNumbers[index] += Number(index);
            newArray.push(arrayOfNumbers[index]);
        } else {
            arrayOfNumbers[index] -= Number(index);
            newArray.push(arrayOfNumbers[index]);
        }
    }
    for (const number of newArray) {
        newArraySum += number;
    }

    console.log(newArray);
    console.log(originalArraySum);
    console.log(newArraySum);


}
addAndSubstract([-5, 11, 3, 0, 2])