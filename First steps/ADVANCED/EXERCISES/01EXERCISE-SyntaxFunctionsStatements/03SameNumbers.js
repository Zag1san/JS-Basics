function solve(input) {

    let inputArray = String(input).split("");
    let isTrue = true;
    let firstEl = inputArray[0];
    let result = 0;
    for (const el of inputArray) {
        result += Number(el);
        if (el !== firstEl) {
            isTrue = false;
        } 
    }
    console.log(isTrue);
    console.log(result);


}
solve(1234)
