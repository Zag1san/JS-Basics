function wall(input) {

    let priceForOneQbm = 1900;
    let qbMetersPerDay = 195;
    let qbMetersTotal = [];

    while (input.length !== 0) {
        let qbmUsedThisDay = 0;
        
        for (let i = 0; i < input.length; i++) {
            input[i]++;
            qbmUsedThisDay += qbMetersPerDay;
            let currentSection = input[i];
            if (currentSection === 30) {
                let indexOfCurrentSection = i;

                input.splice(indexOfCurrentSection, 1);
                i--;
            }
        }
        qbMetersTotal.push(qbmUsedThisDay);   
    }
    console.log(qbMetersTotal.join(', '));
    let sumQbmTotal = function (array) {
        let sum = 0;
        for (const num of array) { 
            sum += num;
        }
        return sum;
    }
    let totalPrice = sumQbmTotal(qbMetersTotal) * priceForOneQbm;
    console.log(`${totalPrice} pesos`);
}
wall([17, 22, 17, 19, 17]);