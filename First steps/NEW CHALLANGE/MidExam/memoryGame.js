function memory(input) {

    let sequenceArray = input.shift().split(' ');

    let movesCnt = 0;

    let command = input.shift();

    while (command !== 'end') {
        movesCnt++;
        let [firstIndex, secondIndex] = command.split(' ').map(Number);
        let firstIndexToRemove = Math.max(firstIndex, secondIndex);
        let secondIndexToRemove = Math.min(firstIndex, secondIndex);
        if (firstIndex === secondIndex || firstIndex < 0 || secondIndex < 0 || firstIndex >= sequenceArray.length || secondIndex >= sequenceArray.length) {
            let insertIndex = sequenceArray.length / 2;
            sequenceArray.splice(insertIndex, 0, `-${movesCnt}a`, `-${movesCnt}a`);
            console.log('Invalid input! Adding additional elements to the board');
            command = input.shift();
            continue;
        }
        if (sequenceArray[firstIndex] === sequenceArray[secondIndex]) {
            let removedElement = sequenceArray.splice(firstIndexToRemove, 1);
            sequenceArray.splice(secondIndexToRemove, 1);
            console.log(`Congrats! You have found matching elements - ${removedElement}!`);
            if (sequenceArray.length === 0) {
                console.log(`You have won in ${movesCnt} turns!`);
                break;
            }
        } else if (sequenceArray[firstIndex] !== sequenceArray[secondIndex]) {
            console.log('Try again!');
        }

        command = input.shift();
    }

    if (command === 'end') {
        console.log('Sorry you lose :(');
        console.log(sequenceArray.join(' '));
    }


}
memory([ '1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0', '1 0', '1 0', 'end' ])
