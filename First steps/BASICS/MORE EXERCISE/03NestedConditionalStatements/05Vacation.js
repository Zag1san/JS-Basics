function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let location;
    let lodgingType;
    let vacationCost = 0;
    if (budget <= 1000) {
        lodgingType = "Camp";
        switch (season) {
            case "Summer": 
            location = "Alaska";
            vacationCost = budget * 0.65;
             break;
            case "Winter": 
            location = "Morocco";
            vacationCost = budget * 0.45;
             break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        lodgingType = "Hut";
        switch (season) {
            case "Summer": 
            location = "Alaska";
            vacationCost = budget * 0.80;
             break;
            case "Winter": 
            location = "Morocco";
            vacationCost = budget * 0.60; 
            break;
        }
    } else {
        lodgingType = "Hotel";
        switch (season) {
            case "Summer": 
            location = "Alaska";
            vacationCost = budget * 0.90;
            break;
            case "Winter": 
            location = "Morocco";
            vacationCost = budget * 0.90; 
             break;
        }

    }
console.log(`${location} - ${lodgingType} - ${vacationCost.toFixed(2)}`);
}
solve([ '2543.99', 'Winter' ])