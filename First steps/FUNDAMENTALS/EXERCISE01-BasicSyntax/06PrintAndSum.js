function printAndSum(firstNum, secondNum) {

    let currentNumber = "";
    let sumOfNumbers = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sumOfNumbers += i;
        currentNumber += i + " ";
    }
    console.log(currentNumber);
    console.log(`Sum: ${sumOfNumbers}`);

}
printAndSum(0, 26)