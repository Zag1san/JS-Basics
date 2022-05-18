function arrayRotation(inputArray,rotations) {

let rotatedArray = inputArray;

for (let i = 0; i < rotations; i++) {
    let firstElement = rotatedArray.shift();
    rotatedArray.push(firstElement);
    
}
console.log(rotatedArray.join(' '));

}
arrayRotation([2, 4, 15, 31], 5);