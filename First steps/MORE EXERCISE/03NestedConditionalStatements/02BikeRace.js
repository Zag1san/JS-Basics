function solve(input) {
    let juniorBikers = Number(input.shift());
    let seniorBikers = Number(input.shift());
    let course = input.shift();
    let totalSum = 0;
    switch (course) {
        case "trail": 
            totalSum = juniorBikers * 5.5 + seniorBikers * 7; 
            break;
        case "cross-country": 
        totalSum = juniorBikers * 8 + seniorBikers * 9.5;
            if (seniorBikers + juniorBikers >= 50) {
                totalSum = juniorBikers * (8 * 0.75) + seniorBikers * (9.5 * 0.75)
            }
        break;
        case "downhill": 
        totalSum = juniorBikers * 12.25 + seniorBikers * 13.75; 
        break;
        case "road": 
        totalSum = juniorBikers * 20 + seniorBikers * 21.5; 
        break;
    }
    let taxFreeSum = totalSum * 0.95;
    console.log(taxFreeSum.toFixed(2))
}
solve([ '10', '10', 'downhill' ])