function solve(input) {
    let days = Number(input.shift()) - 1;
    let roomType = input.shift();
    let rating = input.shift();
    let onePersonRoomPrice = 18.0;
    let apartmentPrice = 25.00;
    let presidentApartmentPrice = 35.00;
    let totalDiscountPrice = 0;
    let totalPrice = 0;
    if (days < 10) {
        switch (roomType) {
            case "room for one person":
                totalPrice = days * onePersonRoomPrice;
                break;
            case "apartment":
                totalPrice = (days * apartmentPrice) * 0.70;
                break;
            case "president apartment":
                totalPrice = (days * presidentApartmentPrice) * 0.90;
                break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (roomType) {
            case "room for one person":
                totalPrice = days * onePersonRoomPrice;
                break;
            case "apartment":
                totalPrice = (days * apartmentPrice) * 0.65;
                break;
            case "president apartment":
                totalPrice = (days * presidentApartmentPrice) * 0.85;
                break;
        }
    } else if (days > 15) {
        switch (roomType) {
            case "room for one person":
                totalPrice = days * onePersonRoomPrice;
                break;
            case "apartment":
                totalPrice = (days * apartmentPrice) * 0.50;
                break;
            case "president apartment":
                totalPrice = (days * presidentApartmentPrice) * 0.80;
                break;
        }
    }
    if (rating === "positive") {
        totalDiscountPrice = totalPrice + (totalPrice * 0.25);
    } else if (rating === "negative") {
        totalDiscountPrice = totalPrice * 0.90;
    }
    console.log(totalDiscountPrice.toFixed(2));
}
solve(['2', 'apartment', 'positive'])