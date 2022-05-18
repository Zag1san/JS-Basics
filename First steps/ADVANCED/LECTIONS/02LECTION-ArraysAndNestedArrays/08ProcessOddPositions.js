function solve(input) {

    let result = [];
    for (let i = 1; i < input.length; i+=2) {
        let currentNum = input[i] * 2;
        result.unshift(currentNum);

    }

    return result.join(" ");
}
solve([10, 15, 20, 25])