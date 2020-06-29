function processOddNumbers(array) {

    let newArray = array.slice();
    
    let processedArray = newArray.filter((x, i)=> i % 2 !== 0).reverse().map(x => x * 2).join(" ");
    console.log(processedArray);
    
    return processedArray;
    
    // let processedArray = [];
    // for (const index in newArray) {

    //     if (index % 2 !== 0) {
    //         processedArray.unshift(newArray[index]);
    //     }
    // }
    
    
    // console.log(processedArray.map(x => x * 2).join(" "));
    
    
}
processOddNumbers([3, 0, 10, 4, 7, 3])