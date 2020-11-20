function solve(text, word) {

    let censoredCnt = word.length;
    let result = text;
    while (result.includes(word)) {
       result = result.replace(word, "*".repeat(censoredCnt));
    }

    console.log(result);

}
solve("A small sentence with some small words", "small")