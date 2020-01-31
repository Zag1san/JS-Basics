function solve(input) {
 let type = input.shift();
 let rows = Number(input.shift());
 let colums = Number(input.shift());
 let viewers = rows * colums;
 let totalSum = 0;
    switch(type) {
        case "Premiere": 
        totalSum = viewers * 12; break;
        case "Normal": 
        totalSum = viewers * 7.50; break;
        case "Discount": 
        totalSum = viewers * 5; break;
    }
    console.log(`${totalSum.toFixed(2)} leva`)
}
solve([ "Normal",
    "21",
    "13"
    ])