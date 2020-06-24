function solve(arr) {

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let currentNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNumber = arr[j];
            if (currentNumber <= nextNumber) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result += currentNumber + " ";
        }
    }
    
    console.log(result);
}
solve([27, 19, 42, 2, 13, 45, 48])

// function solve(arr) {
//     let result = "";
//     let newArray = arr;
//     let counter = 0;

//     while (counter < newArray.length) {
//         let biggestNum = newArray[0 + counter];
//         let isBiggest = true;
//         for (let i = 1 + counter; i < newArray.length; i++) {
            
//             let currentNumber = newArray[i];
            
//             if (biggestNum <= currentNumber) {
//                 isBiggest = false;
//                 break;
//             }
           
            
//         }
//         if(isBiggest) {
//             result += biggestNum + " ";
//         }
        
//         counter++;
        
//     }
  
//     console.log(result);

// }
// solve([1, 4, 3, 2])