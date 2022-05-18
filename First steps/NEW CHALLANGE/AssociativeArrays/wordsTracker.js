function wordsTracker(input) {

    let wordsObject = {};

     input.shift().split(' ').forEach(word => {
        wordsObject[word] = 0;
     });

    for (const word of input) {
        if (wordsObject[word] !== undefined) {
            wordsObject[word]++;
        } 

    }

    let wordsEntriesArray = Object.entries(wordsObject);

    wordsEntriesArray.sort((a, b) => b[1] - a[1]);


    for (const kvp of wordsEntriesArray) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
wordsTracker([
    'is the', 'first',
    'sentence', 'Here',
    'is', 'another',
    'the', 'And',
    'finally', 'the',
    'the', 'sentence'
]);