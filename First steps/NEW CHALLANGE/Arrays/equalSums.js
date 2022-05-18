function equalSums(arr) {

    let isFound = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let reqIndex = i;

        if (arr.length === 1) {
            console.log(reqIndex);
            isFound = true;
            break;
        }
        for (let j = i - 1; j >= 0; j--) {
          
            leftSum += arr[j];  

        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k]

        }

        if (leftSum === rightSum) {
            console.log(reqIndex);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log('no');
    }

}
equalSums([1]);