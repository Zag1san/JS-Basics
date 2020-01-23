function solve(input) {
    let vegikg = Number(input.shift());
    let fruitkg = Number(input.shift());
    let allvegi = Number(input.shift());
    let allfruit = Number(input.shift());
    let leva = (vegikg * allvegi) + (fruitkg * allfruit);
    let euro = 1.94;
    console.log((leva / euro).toFixed(2));
    
}
solve( [ "0.194", "19.4", "10", "10" ] )