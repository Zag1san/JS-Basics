function solve(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < n * 2; i++) {
        let num = Number(input.shift());
        if (i < n) {
            leftSum += num;
        } else {
            rightSum += num;
        }
    }
    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(rightSum - leftSum)}`);
    }
}
solve([ '2', '90', '9', '50', '50' ])