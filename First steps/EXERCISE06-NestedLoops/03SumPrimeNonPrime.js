function solve(input) {

    let n = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (n !== "stop") {
        n = +n;
        let isPrime = true;
        if (n < 0) {
            console.log("Number is negative.");
            n = input.shift();
            continue;
        }
        if (n === 1) {
            isPrime = true;
        }
        let maxDelimiter = Math.floor(Math.sqrt(n));
        for (let i = 2; i <= maxDelimiter; i++) {
            if (n % i == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primeSum += n;
        } else {
            nonPrimeSum += n;
        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
solve([
    '3', '9',
    '0', '7',
    '19', '4',
    'stop', ''
])