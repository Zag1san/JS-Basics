function solve(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let h = Number(input.shift());
    let rectWallArea = x * y;
    let squareWallArea = x * x;
    let winArea = 1.5 * 1.5;
    let doorArea = 1.2 * 2;
    let totalWallArea = (rectWallArea * 2 - 2 * winArea) + (squareWallArea * 2 - doorArea);
    let greenPaint = totalWallArea / 3.4;
    let rectRoofArea =  x * y;
    let triangRoofArea = x / 2 * h;
    let totalRoofArea = rectRoofArea * 2 + triangRoofArea * 2;
    let redPaint = totalRoofArea / 4.3;
    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))
}

solve(["6", "10", "5.2"])