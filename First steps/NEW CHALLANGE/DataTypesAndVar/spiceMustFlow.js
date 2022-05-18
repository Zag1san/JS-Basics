function spiceMustFlow(startingYield) {
    let spiceInYield = startingYield;
    let totalDays = 0;
    let totalSpice = 0;

    while (spiceInYield >= 100) {

        totalSpice += spiceInYield - 26;
       
        totalDays++;
        spiceInYield -= 10
    }
    totalSpice -= 26;
    if (totalSpice < 0) {
        totalSpice = 0;
    }
    console.log(totalDays);
    console.log(totalSpice);

}
spiceMustFlow(111)