function solve(givenArray) {
    let array = givenArray;
    let condensedArray = [];

    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            condensedArray.push(array[i] + array[i + 1]);


        }
        array = condensedArray;
        condensedArray = [];
    }
    console.log(array[0]);


}
solve([5, 0, 4, 1, 2])