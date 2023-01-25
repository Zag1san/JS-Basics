function solve(numbers) {

    let result = [];
    
    numbers.sort((a,b) => a - b);

    while (numbers.length != 0) {
        let leftNum = numbers.shift();
        let rightNum = numbers.pop();
        result.push(leftNum);
        result.push(rightNum);
    }
  return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))