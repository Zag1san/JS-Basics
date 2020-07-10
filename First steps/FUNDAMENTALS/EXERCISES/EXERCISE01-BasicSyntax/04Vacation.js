function vacation(groupOfPeople, typeOfPeople, dayOfWeek) {

    let totalPrice = groupOfPeople;
    let singlePrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfPeople === "Students") {
                totalPrice *= 8.45;
            } else if (typeOfPeople === "Business") {
                singlePrice = 10.90;
                totalPrice *= singlePrice;
            } else if (typeOfPeople === "Regular") {
                totalPrice *= 15;
            }
            break;
        case "Saturday":
            if (typeOfPeople === "Students") {
                totalPrice *= 9.80;
            } else if (typeOfPeople === "Business") {
                singlePrice = 15.60;
                totalPrice *= singlePrice;
            } else if (typeOfPeople === "Regular") {
                totalPrice *= 20;
            }
            break;
        case "Sunday":
            if (typeOfPeople === "Students") {
                totalPrice *= 10.46;
            } else if (typeOfPeople === "Business") {
                singlePrice = 16;
                totalPrice *= singlePrice;
            } else if (typeOfPeople === "Regular") {
                totalPrice *= 22.50;
            }
            break;
    }
    if (groupOfPeople >= 30 && typeOfPeople === "Students") {
        totalPrice *= 0.85; 
    } else if (typeOfPeople === "Business" && groupOfPeople >= 100) {
        totalPrice -= (10 * singlePrice);
    } else if (typeOfPeople === "Regular" && groupOfPeople >= 10 && groupOfPeople <=20) {
        totalPrice  *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacation(40,
    "Regular",
    "Saturday"
    )