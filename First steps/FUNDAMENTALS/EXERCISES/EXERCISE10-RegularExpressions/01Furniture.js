function solve(input) {

    let furniture = [];
    let totalPrice = 0;
    for (const data of input) {

        let pattern = />>(?<product>[\w]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(data);

        if (pattern) {
            furniture.push(pattern.groups.product);
            totalPrice += Number(pattern.groups.price) * Number(pattern.groups.quantity);
        }

    }

    console.log(`Bought furniture:`);
    for (const item of furniture) {
        console.log(item);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
solve([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
  ]);
