function oddAndEvenSum(number) {

    let oddSum = oddSumFunc(number);
    let evenSum = evenSumFunc(number);
    
    function oddSumFunc(n) {
        let summary = 0;
        let strigifiedNumber = n.toString();
        for (let i = 0; i < strigifiedNumber.length; i++) {
            if(Number(strigifiedNumber[i]) % 2 !== 0) { 
            summary += Number(strigifiedNumber[i]);
            }
        }
        return `Odd sum = ${summary}`;

    }
    function evenSumFunc(n) {
        let summary = 0;
        let strigifiedNumber = n.toString();
        for (let i = 1; i < strigifiedNumber.length; i++) {
            if(Number(strigifiedNumber[i]) % 2 === 0) { 
                summary += Number(strigifiedNumber[i]);
                }   
        }
        return `Even sum = ${summary}`;
    }

    return `${oddSum}, ${evenSum}`
}
console.log(oddAndEvenSum(3495892137259234)); 