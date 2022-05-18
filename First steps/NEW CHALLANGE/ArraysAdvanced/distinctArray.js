// function solve(arr) {
//     let clone = arr.slice();
    
//     for (let i = 0; i < clone.length; i++) {
//         let count = i + 1;
//         let currentNumber = clone[i];

//         for (let j = i + 1; j < clone.length; j++) {
            
//             let nextnumber = clone[j];
//             if (currentNumber == nextnumber) {

//                 clone.splice(count, 1);
//             }
//             count++;
//         }
        
//     }

//     console.log(clone.join(' '));
// }
function distinctArray(arr) {
    // let somearr = [1, 2, 3]
    let filteredArray = []
    // console.log(arr);
    // console.log(somearr);

    for (let i = 0; i < arr.length; i++) {

        if (!filteredArray.includes(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    console.log(filteredArray.join(" "));


}
distinctArray([3, 4, 1, 2])