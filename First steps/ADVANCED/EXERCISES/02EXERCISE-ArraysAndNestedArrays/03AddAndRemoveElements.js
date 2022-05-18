function solve(input) {

    let result = [];
    let initialNum = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            result.push(initialNum);
        } else {
            result.pop();
        }
        initialNum++;
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
solve([
    'remove','remove'
    ]
)