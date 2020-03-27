function solve(input) {

    let startingEggs = +input.shift();
    let command = input.shift();
    let eggsSold = 0;
    while (command !== "Close") {
        let currentEggs = +input.shift();
        if(startingEggs < currentEggs && command === "Buy") {
            break;
        }
        if(command === "Buy") {
            startingEggs -= currentEggs;
            eggsSold += currentEggs;
        } else if (command === "Fill") {
            startingEggs += currentEggs
        }
        command = input.shift();
    }
    if(command === "Close") {
        console.log("Store is closed!");
        console.log(`${eggsSold} eggs sold.`);
    } else {
       console.log("Not enough eggs in store!");
       console.log(`You can buy only ${startingEggs}.`)
    }
}
solve([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
  ])