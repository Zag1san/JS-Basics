function solve(array, rotate) {

    let realRotations = rotate % array.length;

    for (let i = 0; i < realRotations; i++) {
        let elementToRotate = array.pop();
        array.unshift(elementToRotate)

    }

    console.log(array.join(' '));
}
solve(['1', 
'2', 
'3', 
'4'], 
2
)