function solve(words, sentence) {

    let wordsArr = words.split(', ');

    wordsArr.forEach(word => {
        let asterix = '*'.repeat(word.length);
        sentence = sentence.replace(asterix, word);
    });

    console.log(sentence);
}
solve('great',
    'softuni is ***** place for learning new programming languages'
)
