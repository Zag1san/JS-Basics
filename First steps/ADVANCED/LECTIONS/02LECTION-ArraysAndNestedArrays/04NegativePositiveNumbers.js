function solve(input) {
    let resultArr = [];
    for (const number of input) {

        if (number < 0) {
            resultArr.unshift(number)
        } else {
            resultArr.push(number);
        }
    }

    for (const num of resultArr) {
        console.log(num);
    }
}
solve([7, -2, 8, 9])