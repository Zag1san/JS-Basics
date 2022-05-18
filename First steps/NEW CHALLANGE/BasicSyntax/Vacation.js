
function vacation(groupOfPeople, typeOfPeople, dayOfWeek) {

    let totalPrice = 0;

    if (dayOfWeek === 'Friday') {

        if (typeOfPeople === 'Students') {
            let singlePrice = 8.45;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice * 0.85;
            }
        }
        if (typeOfPeople === 'Business') {
            let singlePrice = 10.90;
            let discountGroup = 0;
            if (groupOfPeople >= 100) {
                discountGroup = groupOfPeople - 10;
                totalPrice = discountGroup * singlePrice;
            } else {
                totalPrice = singlePrice * groupOfPeople;
            }

        }

        if (typeOfPeople === 'Regular') {
            let singlePrice = 15;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice * 0.95;
            }
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

    }
    if (dayOfWeek === 'Saturday') {

        if (typeOfPeople === 'Students') {
            let singlePrice = 9.80;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice * 0.85;
            }
        }
        if (typeOfPeople === 'Business') {
            let singlePrice = 15.60;
            let discountGroup = 0;
            if (groupOfPeople >= 100) {
                discountGroup = groupOfPeople - 10;
                totalPrice = discountGroup * singlePrice;
            } else {
                totalPrice = singlePrice * groupOfPeople;
            }

        }

        if (typeOfPeople === 'Regular') {
            let singlePrice = 20;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice * 0.95;
            }
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

    }
    if (dayOfWeek === 'Sunday') {

        if (typeOfPeople === 'Students') {
            let singlePrice = 10.46;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 30) {
                totalPrice = totalPrice * 0.85;
            }
        }
        if (typeOfPeople === 'Business') {
            let singlePrice = 16;
            let discountGroup = 0;
            if (groupOfPeople >= 100) {
                discountGroup = groupOfPeople - 10;
                totalPrice = discountGroup * singlePrice;
            } else {
                totalPrice = singlePrice * groupOfPeople;
            }

        }

        if (typeOfPeople === 'Regular') {
            let singlePrice = 22.50;
            totalPrice = singlePrice * groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = totalPrice * 0.95;
            }
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

    }


}

vacation(40, 'Regular', 'Saturday');