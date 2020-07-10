function solve(arr) {

let newArr = [];

    for(let i = 0; i <arr.length; i++) {
        let currentNumber = arr[i];
        
        if(currentNumber < 0) {
            newArr.unshift(currentNumber);
        } else {
            newArr.push(currentNumber);
        }
    }

    for(let i = 0; i < newArr.length; i++) {
       
        console.log(newArr[i]);
        
    }
    
}
solve([7, -2, 8, 9])