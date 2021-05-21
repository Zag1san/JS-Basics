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

    return result.reduce((a, b) => a + b, 0);
    
} 
console.log(
    bombNumbers([1, 4, 4, 2, 8, 9, 1],
        [9, 3]             
        )
);