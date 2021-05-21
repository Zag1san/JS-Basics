function solve(input) {

    let resultArr = [];

    let reversedSorted = input.sort((a, b) => b - a);
    while(reversedSorted.length !== 0) {
        let first = reversedSorted.shift();
        let last = reversedSorted.pop();
        resultArr.push(first);
        resultArr.push(last);
    }

    console.log(resultArr.join(" "));


}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])