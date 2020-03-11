function solve(input) {

    let averageSpeed = +input.shift();
    let fuelPer100km = +input.shift();
    let totalDistance = 384400 * 2;
    let totalTime = totalDistance / averageSpeed;
    let fuelNeeded = (fuelPer100km * (totalDistance)) / 100;
    console.log(Math.ceil((totalTime + 3)));
    console.log(fuelNeeded)
    
}
solve([10000, 5])