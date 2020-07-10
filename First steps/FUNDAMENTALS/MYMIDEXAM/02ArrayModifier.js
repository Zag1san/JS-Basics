function solve(input) {

    let integerArray = input.shift().split(" ").map(Number);

    let currLine = input.shift();

    while (currLine !== 'end') {

        let [command, firstIndex, secondIndex] = currLine.split(" ");
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);
        switch (command) {
            case 'swap':
                swapIndex(integerArray, firstIndex, secondIndex);
                break;
            case 'multiply':
                multiplyIndex(integerArray, firstIndex, secondIndex);
                break;
            case 'decrease':
                decreaseIndexes(integerArray);
                break;
        }


        currLine = input.shift();
    }


    function swapIndex(arr, firstIndex, secondIndex) {
        arr.push(arr[firstIndex]);
        arr.splice(firstIndex, 1, arr[secondIndex]);
        let index = arr.pop();
        arr.splice(secondIndex, 1, index);

    }

    function multiplyIndex(arr, firstIndex, secondIndex) {
        let number = (arr[firstIndex] * arr[secondIndex]);
        arr.splice(firstIndex, 1, number);
    }
    function decreaseIndexes(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] - 1;
        }
        return arr;
    }


    console.log(integerArray.join(", "));


}
console.log(
    solve([
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]

    )
);