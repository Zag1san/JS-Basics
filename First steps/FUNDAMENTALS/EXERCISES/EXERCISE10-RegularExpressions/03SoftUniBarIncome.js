function solve(input) {

    let totalPrice = 0;

    // MY INITIAL SOLUTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    let nameMatch = /%[A-Z][a-z]+%/;
    let productMatch = /<[\w]+>/;
    let quantityMatch = /\|[0-9]+\|/;
    let priceMatch = /[0-9]+\.?[0-9]+[$]/;
    let line = input.shift();
    while (line !== 'end of shift') {
    let currentName = line.match(nameMatch);
    let currentProduct = line.match(productMatch);
    let currentQuantity = line.match(quantityMatch);
    let currentPrice = line.match(priceMatch);
    if (currentName !== null &&
         currentProduct !== null &&
          currentPrice !== null &&
          currentQuantity !== null) {
              currentName = currentName[0].substring(1, currentName[0].length - 1);
              currentProduct = currentProduct[0].substring(1, currentProduct[0].length - 1);
              currentQuantity = currentQuantity[0].substring(1, currentQuantity[0].length - 1);
              currentPrice = currentPrice[0].substring(0,currentPrice[0].length - 1);
          console.log(`${currentName}: ${currentProduct} - ${(Number(currentQuantity) * Number(currentPrice)).toFixed(2)} `);
          totalPrice += (Number(currentQuantity) * Number(currentPrice));
      }
     line = input.shift();
     }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);

    // SECOND SOLUTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    for (const line of input) {
        let pattern = /%(?<clientName>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*\|(?<quantity>[\d]+)\|[^|$%.\d]*(?<price>[\d]+\.?[\d]*)\$/g.exec(line);

        if (pattern) {
            let price = Number(pattern.groups.quantity) * Number(pattern.groups.price);
            totalPrice += price;
            console.log(`${pattern.groups.clientName}: ${pattern.groups.product} - ${price.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])