function solve(word) {

    let wordArr = word.split("");
    let result = wordArr[0];
    for (let i = 1; i < wordArr.length; i++) {
        let currentLetter = wordArr[i];
        if (currentLetter === wordArr[i - 1]) {
            continue;
        } else {
            result += currentLetter
        }
    }

    console.log(result);
}
solve('aaaaabbbbbcdddeeeedssaa')