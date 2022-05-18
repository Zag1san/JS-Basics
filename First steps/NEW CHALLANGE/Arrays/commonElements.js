function commonElements(firstArray, secondArray) {


    for (let i = 0; i < firstArray.length; i++) {
        let currentFirstArrayElement = firstArray[i];
        if (secondArray.includes(currentFirstArrayElement)) {
            console.log(currentFirstArrayElement);
        }

    }



}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);