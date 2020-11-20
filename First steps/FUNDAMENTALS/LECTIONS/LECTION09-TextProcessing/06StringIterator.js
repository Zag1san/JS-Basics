function solve(text) {

    let arrText = text.split(" ");

    for (const word of arrText) {
        console.log(word);

    }

}
    // With Iterator
function solve(text, string) {

    let words = text.split(" ")

    let iterator = {
        next: function () {
            let isDone = words.length == 0;
            let currentWord = words.shift()
            return {
                value: currentWord,
                done: isDone,
            };

        }
    };
    let nextElement = iterator.next();
    while (!nextElement.done) {
        console.log(nextElement.value);
        nextElement = iterator.next()
    }

}
solve("Et cillum do voluptate cillum ut cupidatat aliqua.")