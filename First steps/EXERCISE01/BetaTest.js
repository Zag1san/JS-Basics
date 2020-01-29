function solve(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let a = Number(input.shift());
    let dancer = 40 + 7000;
    let hallarea = (l * 100) * (w * 100);
    let wardrobe = a * 100 * a * 100;
    let bench = hallarea / 10;
    let freespace = hallarea - (wardrobe + bench);
    let result = freespace / (40 + 7000);
    console.log(Math.round(result))
}
solve( ["50", "25", "2"] )