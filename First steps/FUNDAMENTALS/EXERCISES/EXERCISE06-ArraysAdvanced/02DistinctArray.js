function distinctArray(arr) {
    let somearr = [1, 2, 3]
    let filteredArray = []
    console.log(arr);
    console.log(somearr);

    for (let i = 0; i < arr.length; i++) {

        if (!filteredArray.includes(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    console.log(filteredArray.join(" "));


}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
    ;
