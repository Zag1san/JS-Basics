function sorting(arr) {

    let result = []

    let sortedArr = arr.slice(0).sort((a, b) => b - a)
   
    while(sortedArr.length !== 0) {

        result.push(sortedArr.shift());
        result.push(sortedArr.pop());
    }

    console.log(result.join(" "));
     
}
console.log(
    sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
);