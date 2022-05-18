function maxSequence(arrayOfNumbers) {

    let biggestSequence = 1;
    let number = '';

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNum = arrayOfNumbers[i];
        let currentSequence = 1;
        for (let j = i + 1; j <= arrayOfNumbers.length; j++) {
            let nextNumber = arrayOfNumbers[j];
            if (currentNum === nextNumber) {
                currentSequence++;
            } else if (currentNum !== nextNumber) {
                if(biggestSequence < currentSequence) {
                    biggestSequence = currentSequence;
                    number = currentNum + ' ';
                }
                break;
            }

        }

    }

    console.log(number.repeat(biggestSequence));


}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])