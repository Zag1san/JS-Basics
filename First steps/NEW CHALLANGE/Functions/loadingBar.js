function loadingBar(input) {

    let barLoaded = fillingBar(input)

    function fillingBar(input) {

        let percentage = '%';
        let dots = '.';
        let barFilled = input / 10;
        let barToFill = 10 - barFilled;
        let result = percentage.repeat(barFilled) + dots.repeat(barToFill);

        return result;
    }

    if(input === 100) {
        console.log(`${input}% Complete!`);
        console.log(`[${barLoaded}]`);
    } else {
        console.log(`${input}% [${barLoaded}]`);
        console.log('Still loading...');
    }


}
console.log(loadingBar(100));