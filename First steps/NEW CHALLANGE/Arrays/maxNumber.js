function maxNumber(arr) {

    let isBigger = false;
    
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if(i === arr.length - 1) {
            resultArr.push(currentNum);
            break;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNum <= arr[j]) {
                isBigger = false;
                break;
            } else {
                isBigger = true;
            }

        }
        if(isBigger) {
            resultArr.push(currentNum);
        }

    }
    console.log(resultArr.join(' '));

}

maxNumber([27, 19, 42, 2, 13, 45, 48]);