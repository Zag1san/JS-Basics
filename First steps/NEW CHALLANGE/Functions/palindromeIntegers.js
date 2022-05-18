function palindromeIntegers(inputArray) {


    for (let i = 0; i < inputArray.length; i++) {
        let currentString = inputArray[i].toString();
        let result = '';
        for (let j = currentString.length - 1; j >= 0; j--) {
            result += currentString[j];

        }
        if (currentString === result) {
            console.log('true');
        } else {
            console.log('false');
        }
    }


}
palindromeIntegers([32,2,232,1010])