function solve(inputArray) {

    let newArray = [];
    let firstArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < inputArray.length; i++) {

            if(inputArray[i] % 2 === 0) {
                newArray[i] = inputArray[i] + i;
            } else {
                newArray[i] = inputArray[i] - i;
            }
            
    }
    for(let number of inputArray) {
        firstArraySum += number;

    }
    for(let number of newArray) {
        newArraySum += number;

    }
    console.log(newArray);
    console.log(firstArraySum);
    console.log(newArraySum);
    

}
solve([-5, 11, 3, 0, 2])