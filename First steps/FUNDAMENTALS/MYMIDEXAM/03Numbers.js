function solve(sequence) {

    let integerArray = sequence.split(" ").map(Number);
    let arraySum = 0;

    for (const number of integerArray) {
        arraySum += number;
    }
    let averageNumber = Number((arraySum / integerArray.length).toFixed(2));

    let newIntegerArray = [];

    for (let i = 0; i < integerArray.length; i++) {
        if (integerArray[i] > averageNumber) {
            newIntegerArray.push(integerArray[i]);
        }
    }

    if (newIntegerArray.length === 0) {
        console.log('No');

    } else if (newIntegerArray.length > 5) {

        newIntegerArray.sort((a, b) => b - a);
        let resultArray = newIntegerArray.slice(0, 5)
        console.log(resultArray.join(" "));
        
    } else {
        newIntegerArray.sort((a, b) => b - a)
        console.log(newIntegerArray.join(" "));
        
    }

}

console.log(
    solve('10 20 30 40 50')
);