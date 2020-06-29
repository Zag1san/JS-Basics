function oddAndEvenSum(num) {

    let stringOfNum = num.toString();
    let oddSum = getOddSum(num);
    let evenSum = getEvenSum(num);

    function getOddSum(n) {
        let result = 0;
        for (let i = 0; i <= stringOfNum.length - 1; i++) {
            let currentNumber = parseInt(stringOfNum[i])
            if (currentNumber % 2 !== 0) {
                result += currentNumber;
            }
        }
        return result;
        

    }

    function getEvenSum(n) {
        let result = 0;
        for (let i = 0; i <= stringOfNum.length - 1; i++) {
            let currentNumber = parseInt(stringOfNum[i])
            if (currentNumber % 2 === 0) {
                result += currentNumber;
            }
        }
        
        return result;
        

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
oddAndEvenSum(3495892137259234)