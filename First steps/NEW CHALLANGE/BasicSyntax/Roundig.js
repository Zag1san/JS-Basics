function rounding(value, precision) {

    let newPrecision = precision
    let newValue = "";
    if (precision > 15) {
        newPrecision = 15;
        newValue = value.toFixed(newPrecision);
    } else {
        newValue = value.toFixed(newPrecision);
    }
    console.log(parseFloat(newValue));

}

rounding(10.5, 3)