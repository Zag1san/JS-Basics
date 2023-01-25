function solve(text) {

    let pattern = /\w+/g

    let arr = text.match(pattern);

    let result = [];
    for (const word of arr) {
        let upper = word.toUpperCase();
        result.push(upper);
    }
    console.log(result.join(', '));
}
solve('Hi, how are you?')