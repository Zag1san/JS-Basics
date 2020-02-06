function solve(input) {
    let n = Number(input.shift());
    let result = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        result += num;     
    }
    console.log(result)
}
solve([2, 10, 20])