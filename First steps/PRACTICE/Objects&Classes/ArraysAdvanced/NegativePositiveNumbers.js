function solve(arr) {

    const newArr = [];

    arr.forEach(element => {
    if(element < 0){
        newArr.unshift(element)
    } else {
        newArr.push(element)
    }
});

newArr.forEach(el => console.log(el))
    
}
 solve([3, -2, 0, -1])