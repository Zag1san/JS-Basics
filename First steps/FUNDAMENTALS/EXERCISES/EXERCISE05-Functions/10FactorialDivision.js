function factorialDivision(numOne, numTwo) {

    function findFactorial(num) {

        let result = 1;
        
        for (let i = 1; i <= num; i++) {
           result *= i;
            
        }
        return result;
    }

    let factorialOne = findFactorial(numOne);
    let factorialTwo = findFactorial(numTwo);

    let result = factorialOne / factorialTwo;

    console.log(result.toFixed(2));
    


}
factorialDivision(5, 2)