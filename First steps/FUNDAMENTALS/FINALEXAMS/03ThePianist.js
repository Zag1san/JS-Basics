function solve(input) {

    let resultObj = {};
    let count = input.shift();
    let pieces = input.splice(0, count);

    for (const line of pieces) {
        let [piece, composer, tune] = line.split('|');
        resultObj[piece] = [composer, tune];
    }

    let line = input.shift();

    while (line !== 'Stop') {

        let [command, piece, composer, key] = line.split('|');
        switch (command) {
            case 'Add':
                if (resultObj[piece]) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    resultObj[piece] = [composer, key];
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                if (resultObj[piece]) {
                    delete resultObj[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {

                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (resultObj[piece]) {
                    let newKey = composer;
                    resultObj[piece].pop();
                    resultObj[piece].push(newKey);
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);

                }
                break;

        }

        line = input.shift();
    }

    let resultArray = Object.entries(resultObj);

    for (const kvp of resultArray) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1][0]}, Key: ${kvp[1][1]}`);
    }

}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);