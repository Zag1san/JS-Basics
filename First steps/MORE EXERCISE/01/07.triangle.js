function triangle(input) {
    let a = Number(input.shift());
    let h = Number(input.shift());
    let area = ((a * h) / 2).toFixed(2);
    console.log(area);

}
triangle( [ "20", "30" ])