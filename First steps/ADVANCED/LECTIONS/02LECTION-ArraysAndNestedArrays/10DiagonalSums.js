function solve(matrix) {

    let primeDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];
        let neededNum = currentArr[(currentArr.length - 1) - i];
        primeDiagonalSum += matrix[i][0 + i]

        secondaryDiagonalSum += neededNum
    }

    let resultArr = [];
    resultArr.push(primeDiagonalSum, secondaryDiagonalSum)
    
    console.log(resultArr.join(" "));
}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);