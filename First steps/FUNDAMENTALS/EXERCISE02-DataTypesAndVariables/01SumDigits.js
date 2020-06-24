function solve(number) {

    number = number.toString();
    let totalSum = 0;

    for (let i = 0; i < number.length; i++) {
    totalSum += Number(number[i]);
    }
    console.log(totalSum);
}
solve(245678)