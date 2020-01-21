function solve(input) {
    let figure = input.shift();
    if (figure === "square") {
        let a = Number(input.shift());
        console.log((a * a).toFixed(3));
    } else if (figure === "rectangle"){
        let a = Number(input.shift());
        let b = Number(input.shift());
        console.log((a * b).toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input.shift());
        console.log((Math.PI * r * r).toFixed(3));
    } else if (figure === "triangle") {
        let a = Number(input.shift());
        let ha = Number(input.shift());
        console.log(((a * ha) / 2).toFixed(3));
    }
}
solve(["rectangle", "7", "2.5"])