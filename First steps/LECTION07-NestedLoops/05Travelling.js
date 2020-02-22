function solve(input) {

    let destination = input.shift();
    let moneyNeeded = +input.shift();
    let savedAmount = +input.shift();
    let savedMoney = 0;
    let isSaved = false;
    
    while (destination !== "End") {
        while (savedMoney < moneyNeeded) {
            savedMoney += savedAmount;
            if (savedMoney >= moneyNeeded) {
                isSaved = true;
                savedMoney = 0;
                break;
            }

            savedAmount = +input.shift()
        }
        if (isSaved) {
            console.log(`Going to ${destination}!`)
        }
        destination = input.shift();
        moneyNeeded = +input.shift();
        savedAmount = +input.shift();
    }
    
}
solve([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   ''
  ])