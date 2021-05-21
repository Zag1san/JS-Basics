function solve(array) {

    result = [];

    for (const index in array) {
        if (index % 2 !== 0) {
            let currentOddnumber = array[index] * 2;
            result.unshift(currentOddnumber);
        }
    }
    console.log(result.join(" "));
}
solve([10, 15, 20, 25])