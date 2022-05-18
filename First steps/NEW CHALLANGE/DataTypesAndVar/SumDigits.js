function sumDigits(number) {

    let sum = 0;
    let stringifiedNumber = number.toString();


    for (let i = 0; i < stringifiedNumber.length; i++) {
        sum += Number(stringifiedNumber[i]);

    }
    console.log(sum);
}
sumDigits(245678)