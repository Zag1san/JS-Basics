function magicSum(arr, magicSum) {


    for (let index = 0; index < arr.length - 1; index++) {
        let currentNumber = arr[index];
        for (let i = index + 1; i < arr.length; i++) {
            let nextNumber = arr[i];
            if (currentNumber + nextNumber === magicSum) {
                console.log(currentNumber + " " + nextNumber);

            }
        }

    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )