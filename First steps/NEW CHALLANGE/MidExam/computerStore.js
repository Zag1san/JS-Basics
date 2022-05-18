function computerStore(input) {

    let nextCommand = input.shift()
    let totalPrice = 0;
    let taxes = 0;
    while (nextCommand !== 'special' && nextCommand !== 'regular') {

        let price = Number(nextCommand);
        if (price <= 0) {
            console.log('Invalid price!');
            nextCommand = input.shift();
            continue;
        }
        let priceWithTax = price * 1.2;
        let tax = priceWithTax - price;
        totalPrice += priceWithTax;
        taxes += tax;
        nextCommand = input.shift();
    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else if (nextCommand === 'special') {
        let priceWithDiscount = totalPrice * 0.9;
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${(totalPrice - taxes).toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${priceWithDiscount.toFixed(2)}$
        `);
    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${(totalPrice - taxes).toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$
        `);
    }

}
computerStore([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
])