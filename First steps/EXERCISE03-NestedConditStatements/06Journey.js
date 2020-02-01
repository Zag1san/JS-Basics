function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination;
    let lodging;
    let moneySpent = 0;
    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            moneySpent = budget * 0.3;
            lodging = "Camp"
        } else {
            moneySpent = budget * 0.7;
            lodging = "Hotel";
        }
    } else if(budget <= 1000) {
        destination = "Balkans" 
        if (season === "summer") {
             moneySpent = budget * 0.4;
             lodging = "Camp"
         } else {
             moneySpent = budget * 0.8;
             lodging = "Hotel"
         }
    } else {
        destination = "Europe"
        lodging = "Hotel"
        moneySpent = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${lodging} - ${moneySpent.toFixed(2)}`);
}
solve([ '1500', 'summer' ])