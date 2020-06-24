function solve(arr) {

    let isElement = false;
    let atIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for(let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if(leftSum === rightSum) {
            atIndex = i;
            isElement = true;
            break;
        }

    }
    if(isElement) {
        console.log(atIndex);
    } else if (arr.length === 1) {
        console.log(0)
        
    } else {
        console.log('no');
    }

}
solve([10])