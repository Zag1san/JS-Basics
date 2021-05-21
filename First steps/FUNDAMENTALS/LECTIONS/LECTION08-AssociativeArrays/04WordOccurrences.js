function solve(input) {

    let words = {};

    for (const word of input) {
        if (words[word]) {
            words[word]++;
        } else {
            words[word] = 1;
        }

    }
    let wordsEntries = Object.entries(words);

    wordsEntries.sort((a, b) => b[1] - a[1]);

    for (const kvp of wordsEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}
solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);