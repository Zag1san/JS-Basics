function solve(input) {

    let month = input.shift();
    let hours = +input.shift();
    let peopleCnt = +input.shift();
    let time = input.shift();
    let pricePerHour = 0;
        
    switch (time) {
            case "day": 
            if (month === "march" || month === "april" || month === "may") {
                pricePerHour = 10.50;
            } else {
                pricePerHour = 12.60;
            } 
            break;
            case "night": 
            if (month === "march" || month === "april" || month === "may") {
                pricePerHour = 8.40;
            } else {
                pricePerHour = 10.20;
            } 
            break;
        }
    if(peopleCnt >= 4) {
        pricePerHour = pricePerHour * 0.9;
    }
    if (hours >= 5) {
        pricePerHour = pricePerHour * 0.5;
    }
    let totalPrice = (pricePerHour * hours) * peopleCnt;
    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
solve([ 'march', '3', '3', 'day' ])