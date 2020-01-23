function solve(input) {
    let num = Number(input.shift());
    let entryUnit = input.shift();
    let exitUnit = input.shift();
    if (entryUnit === "mm") {
    num = num / 10;
    } else if (entryUnit === "m") {
    num = num * 100;
    } 
    if (exitUnit === "mm") {
        num = num * 10;
    } else if (exitUnit === "m") {
        num = num / 100;
    } else if (exitUnit === "cm") {
        num = num
    }
    console.log(num.toFixed(3))
}
solve(["45", "cm", "mm"])