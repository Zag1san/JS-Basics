function solve(input) {

    let output = [];
    let max = Number.MIN_SAFE_INTEGER;

    input.forEach(num => {
        if (num >= max) {
            max = num;
            output.push(max);
        }
        
    });
    return output;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)