function solve(input) {
    let oneRaquetPrice = Number(input.shift());
    let raquetCnt = Number(input.shift());
    let shoesCnt = Number(input.shift());
    let shoesPrice = oneRaquetPrice / 6;
    let allRaquetPrice = oneRaquetPrice * raquetCnt;
    let allShoesPrice = shoesPrice * shoesCnt;
    let otherStuffPrice = (allRaquetPrice + allShoesPrice) * 0.20;
    let wholeAmount = allShoesPrice + allRaquetPrice + otherStuffPrice;
    let jokerPay = wholeAmount / 8;
    let sponsorPay = wholeAmount - jokerPay;
    console.log(`Price to be paid by Djokovic ${Math.floor(jokerPay)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPay)}`);
}
solve([850,
    4,
    2
    ])