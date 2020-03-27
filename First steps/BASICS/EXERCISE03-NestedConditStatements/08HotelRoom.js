function solve(input) {
    let month = input.shift();
    let days = Number(input.shift());
    let studioPrice = 0;
    let apartmentPrice = 0;
    // May, June, July, August, September или October
    if (month === "May" || month === "October") {
        if (days > 7 && days <= 14) {
            studioPrice = days * (50 * 0.95);
            apartmentPrice = days * 65;
        } else if (days > 14) {
            studioPrice = days * (50 * 0.7);
            apartmentPrice = days * (65 * 0.9);
        } else {
            studioPrice = days * 50;
            apartmentPrice = days * 65;
        }
    } else if (month === "June" || month === "September") {
        if (days > 14) {
            studioPrice = days * (75.20 * 0.8);
            apartmentPrice = days * (68.70 * 0.9);
        } else {
            studioPrice = days * 75.2;
            apartmentPrice = days * 68.70;
        }
    } else {
        if (days > 14) {
            studioPrice = days * 76;
            apartmentPrice = days * (77 * 0.9);
        } else {
            studioPrice = days * 76;
            apartmentPrice = days * 77;
        }

    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

solve([ 'August', '20' ])