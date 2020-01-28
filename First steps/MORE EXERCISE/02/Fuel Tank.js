function solve(input) {
    let fuelType = input.shift();
    let fuelInTank = Number(input.shift());
    if (fuelType === "Diesel") {
        fuelType = "diesel";
        if (fuelInTank >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    } else if (fuelType === "Gasoline") {
        fuelType = "gasoline";
        if (fuelInTank >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    } else if (fuelType === "Gas") {
        fuelType = "gas";
        if (fuelInTank >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}
solve([ 'Diesel', '10' ])