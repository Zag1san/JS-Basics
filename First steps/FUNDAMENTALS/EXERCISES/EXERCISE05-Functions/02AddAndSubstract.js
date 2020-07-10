function addAndSubtract(a, b, c) {

    let sumNumbers = sum(a, b);
    let subtractNumbers = subtract(sumNumbers, c)

    function sum(a, b) {
      
       return a + b;
    }

    function subtract(a, b) {

        return a - b;
    }
   
    return subtractNumbers;
}

    let  result = addAndSubtract(23, 6, 10);
    
    console.log(result);
