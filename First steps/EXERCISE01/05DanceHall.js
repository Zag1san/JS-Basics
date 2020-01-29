function solve(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let a = Number(input.shift());
    let dancer = 7040;
    let hallarea = l * w / 0.0001;
    let wardrobe = a * a / 0.0001;
    let bench = hallarea / 10;
    let freespace = hallarea - (wardrobe + bench);
    let result = freespace / dancer;
    console.log(Math.floor(result))
}
solve( ["50", "25", "2"] )