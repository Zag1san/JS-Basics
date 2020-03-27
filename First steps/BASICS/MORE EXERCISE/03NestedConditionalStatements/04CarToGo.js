function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let carClass;
    let carType;
    let carFee = 0;
    if (budget <= 100) {
        carClass = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carFee = budget * 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                carFee = budget * 0.65;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carFee = budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                carFee = budget * 0.80;
                break;
        }
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        carFee = budget * 0.90;

    }
    console.log(carClass)
    console.log(`${carType} - ${carFee.toFixed(2)}`)
}
solve([ '1010', 'Winter' ])