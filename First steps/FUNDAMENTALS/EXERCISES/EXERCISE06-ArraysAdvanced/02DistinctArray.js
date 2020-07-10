function distinctArray(arr) {

    let filteredArray = []
   
    for (let i = 0; i < arr.length; i++) {
        
        if(!filteredArray.includes(arr[i])){
            filteredArray.push(arr[i]);
        } 
    }
    return filteredArray.join(" ");


}
console.log(
    distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
);
