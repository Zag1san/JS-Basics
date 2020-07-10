function rounding(number, precision) {
    let numberToBeFixed = "";

    if (precision >= 0 && precision <= 15) {
        numberToBeFixed = number.toFixed(precision);
    } else {
        numberToBeFixed = number.toFixed(15);
    }

    console.log(parseFloat(numberToBeFixed));
}
rounding(3.1415926535897932384626433832795, 2)