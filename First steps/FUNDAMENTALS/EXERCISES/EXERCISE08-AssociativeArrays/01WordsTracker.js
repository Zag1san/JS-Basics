function solve(input) {

    let words = {};

    input.shift().split(" ").forEach(word => {
        words[word] = 0
    });

    for (const word of input) {

        if (words[word] !== undefined) {
            words[word]++;
        }

    }

    let wordsEntries = Object.entries(words);

    wordsEntries.sort((a, b) => b[1] - a[1]);

    for (const kvp of wordsEntries) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
