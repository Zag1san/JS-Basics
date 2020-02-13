function solve(input) {

    let expectedMoney = +input.shift();
    let currentMoney = input.shift();
    let counter = 1;
    let cashCounter = 0;
    let bankCounter = 0;
    let cashMoney = 0;
    let bankMoney = 0;
    let allMoney = 0;
    let isEnd = false;

        while (expectedMoney > allMoney) {
            
            if (currentMoney === "End") {
                isEnd = true;
                break;
            }
            currentMoney = +currentMoney;
            if (counter % 2 === 1 && currentMoney <= 100) {
                cashMoney += currentMoney;
                allMoney += currentMoney;
                cashCounter++;
                console.log(`Product sold!`);
            } else if (counter % 2 === 1 && currentMoney > 100) {
                console.log(`Error in transaction!`);
            }
            if (counter % 2 === 0 && currentMoney >= 10) {
                bankMoney += currentMoney;
                allMoney += currentMoney;
                bankCounter++;
                console.log(`Product sold!`)
            } else if (counter % 2 === 0 && currentMoney < 10) {
                console.log(`Error in transaction!`);
            }
            counter++;
            currentMoney = input.shift();
        }
        if (isEnd) {
            console.log(`Failed to collect required money for charity.`)
        }
        if(allMoney >= expectedMoney) {
            let averageCashMoney = cashMoney / cashCounter;
            let averageBankMoney = bankMoney / bankCounter;
            console.log(`Average CS: ${averageCashMoney.toFixed(2)}`);
            console.log(`Average CC: ${averageBankMoney.toFixed(2)}`);
        }
        
}
solve([ '500', 'End', '150', '98', '227', 'End' ])