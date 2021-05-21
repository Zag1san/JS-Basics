function solve(wantedWord, text) {

    let lowerCaseWord = wantedWord.toLowerCase()
    let lowerCaseText = text.toLowerCase()

    let textArr = lowerCaseText.split(" ");

    if (textArr.includes(lowerCaseWord)) {
        console.log(lowerCaseWord);
    } else {
        console.log(`${lowerCaseWord} not found!`);
    }

}
solve('python',
    'JavaScript is the best programming language'
)