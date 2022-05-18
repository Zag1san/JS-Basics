function solve(stringArr, delimeter) {

        // let array1 = [];
        // for (let i = 0; i < stringArr.length - 1; i++) {
        //     let currEl = stringArr[i];
        //     currEl += delimeter;
        //     array1.push(currEl)
        // }
        // array1.push(stringArr[stringArr.length - 1])
        // console.log(array1.join(""));

        let arr = stringArr.join(delimeter);
        console.log(arr);
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')