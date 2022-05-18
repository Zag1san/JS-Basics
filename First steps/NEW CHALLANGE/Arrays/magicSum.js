function magicSum(arr, magicNum) {



    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if((currentNum + nextNum) === magicNum && nextNum !== undefined) {
                console.log(`${currentNum} ${nextNum}`);
            }
            
        }
    }


}
magicSum([1, 7, 6, 2, 19, 23],
    8
    
)