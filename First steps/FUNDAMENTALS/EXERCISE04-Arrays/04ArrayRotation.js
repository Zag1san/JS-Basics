function solve(someArray, rotations) {

    let newArray = someArray;
    let neededRots = rotations % someArray.length;
    for (let i = 0; i < neededRots; i++) {
        newArray.push(someArray[i - i])
        newArray.shift(someArray[i - i]);
    }
    console.log(newArray.join(" "))

}
solve([2, 4, 15, 31], 5)