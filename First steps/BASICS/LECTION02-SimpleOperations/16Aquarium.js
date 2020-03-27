function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percentage = Number(input.shift());
    let volume = length * width * heigth;
    let liters = volume * 0.001;
    let result = liters - liters * percentage / 100;
    console.log(result.toFixed(3));
}

solve ( [ "105", "77", "89", "18.5" ] )