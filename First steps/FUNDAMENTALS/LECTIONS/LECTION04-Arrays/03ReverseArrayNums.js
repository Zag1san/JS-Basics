function solve(length, elements) {

let newArray = [];
let result = "";
    for (let i = 0; i < length; i++) {
        newArray[i] = elements[i];
        
    }
   for (let index = length - 1; index >= 0; index--) {
        result += newArray[index] + " ";
       
   }
    console.log(result);
    

}
solve(3, [10, 20, 30, 40, 50])