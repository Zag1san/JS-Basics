function sorting(inputArray) {

    let resultArray = [];

    let sortedArray = inputArray.sort((a, b) => a - b);

    while (sortedArray.length !== 0) {
        	let lastElement = sortedArray.pop();
            let firsElement = sortedArray.shift();
            resultArray.push(lastElement);
            resultArray.push(firsElement);

    }

    console.log(resultArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])