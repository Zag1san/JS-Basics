function solve(input) {

    let change = +input.shift();
    let coins = 0;

    while (change > 0) {

        if (change >= 2) {
            change -= 2;
        } else if (change >= 1) {
            change -= 1;
        } else if (change >= 0.50) {
            change -= 0.50;
        } else if (change >= 0.20) {
            change -= 0.20;
        } else if (change >= 0.10) {
            change -= 0.10;
        } else if (change >= 0.05) {
            change -= 0.05;
        } else if (change >= 0.02) {
            change -= 0.02; 
        } else {
            change -= 0.01;         
        }
        change = +change.toFixed(2);
        coins++;
    }
    console.log(coins);
}
solve([ "2.73" ])