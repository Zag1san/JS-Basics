function solve(input){
    let yard = Number(input.shift());
    let m2 = 7.61;
    let price = yard * m2;
    let discount = (price * 18) / 100;
    let finalprice = price - discount;
    let finaldiscount = price - finalprice;
    console.log(`The final price is: ${finalprice.toFixed(2)} lv.`);
    console.log(`The discount is: ${finaldiscount.toFixed(2)} lv.`);

}
solve( [ "540" ] )