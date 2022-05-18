function solve(input) {

    let sortedArray = input.sort((a, b) => a - b);

    if (sortedArray.length % 2 !== 0) {
        let index = Math.floor(sortedArray.length / 2);
        sortedArray = sortedArray.slice(index);
        

    } else {
        index = (sortedArray.length / 2);
        sortedArray = sortedArray.slice(index);
        

    }

    return sortedArray
}
solve([4, 7, 2, 5]);

