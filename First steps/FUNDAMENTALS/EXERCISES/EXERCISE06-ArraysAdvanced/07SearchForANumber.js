function solve(arr1, arr2) {
    let counter = 0;
    let neededNum = arr2[2];
    let array = arr1.slice(0, arr2[0]);
    array.splice(0, arr2[1]);
    for (const el of array) {
        if (el === neededNum) {
            counter++;
        }
    
    }
    console.log(`Number ${neededNum} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
