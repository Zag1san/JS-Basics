function solve(input) {

    let result = [];
    result.push(input[0]);
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i];
        if (currentEl >= result[result.length - 1]) {
            result.push(currentEl);
        }


    }
    return result
}
solve(
    [20,
        3,
        2,
        15,
        6,
        1]

)