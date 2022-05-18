function arrayManipulator(arrayOfNumbers, arrayOfStrings) {

    for (let i = 0; i < arrayOfStrings.length; i++) {

        let arrayOfCommands = arrayOfStrings[i].split(' ');
        let command = arrayOfCommands.shift();
        let index = Number(arrayOfCommands.shift());
        arrayOfCommands = arrayOfCommands.map(Number);
        if (command === 'print') {
            console.log(`[ ${arrayOfNumbers.join(', ')} ]`);
            break;
        }
        switch (command) {
            case 'add':
                let addedNum = arrayOfCommands[0];
                arrayOfNumbers.splice(index, 0, addedNum);

                break;
            case 'addMany':

                arrayOfNumbers.splice(index, 0, ...arrayOfCommands)

                break;
            case 'contains':
                let indexOfElenent = arrayOfNumbers.indexOf(index);
                console.log(indexOfElenent);
                break;
            case 'remove':
                arrayOfNumbers.splice(index, 1);

                break;
            case 'shift':
                for (let i = 0; i < index; i++) {
                    let shiftedElement = arrayOfNumbers.shift();
                    arrayOfNumbers.push(shiftedElement);
                }

                break;
            case 'sumPairs':
                let sumPairs = function (arr) {
                    let result = [];
                    for (let i = 0; i < arr.length; i += 2) {
                        let firstNumber = arr[i];
                        let secondNumber = arr[i + 1];
                        if (secondNumber !== undefined) {
                            let sum = firstNumber + secondNumber;
                            result.push(sum);
                        } else {
                            result.push(firstNumber);
                        }
                    }
                    return result;
                }
                arrayOfNumbers = sumPairs(arrayOfNumbers);
                break;


        }

    }

}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

)