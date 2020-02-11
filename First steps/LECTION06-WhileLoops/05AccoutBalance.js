function solve(input) {

    let transactions = +input.shift();
    let total = 0;
    let transactionsCnt = 0;
    let currentTransaction = +input.shift();
    
    while (transactionsCnt < transactions) {
        
        if (currentTransaction < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${currentTransaction.toFixed(2)}`)
        total += currentTransaction;
        transactionsCnt++;
        currentTransaction = +input.shift();
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
solve([ '3', '5.51', '69.42', '100' ])