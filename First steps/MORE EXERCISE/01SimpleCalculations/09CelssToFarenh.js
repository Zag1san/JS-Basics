function solve(input) {
    let celsius = Number(input.shift());
    let farenh = (celsius * 9 / 5) + 32;
    console.log(farenh.toFixed(2));
}

solve( [ "25" ] )