function printAndSum(startNum, endNum) {
    let allNumbers = '';
    let sumOfNumbers = 0;
    for (let i = startNum; i <= endNum; i++){
        allNumbers += i + ' ';
        sumOfNumbers += i;
    }
    console.log(allNumbers);
    console.log(`Sum: ${sumOfNumbers}`);

}

printAndSum(0, 26)