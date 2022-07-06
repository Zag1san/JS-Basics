function solve(input) {

    let resultObj = {};
    let racers = input.shift().split(', ');

    let namesMatch = /[A-Za-z]/g;
    let kilometersMatch = /[0-9]/g;
    let currentLine = input.shift();

    while (currentLine !== 'end of race') {
        let currentLineName = currentLine.match(namesMatch).join('');
        let currentLineKilometers = currentLine.match(kilometersMatch)
            .map(Number)
            .reduce((acc, currVal) => {
                return acc + currVal;
            }, 0);

        if (racers.includes(currentLineName) && resultObj[currentLineName]) {
            resultObj[currentLineName] += currentLineKilometers;
        } else if (racers.includes(currentLineName) && !resultObj[currentLineName]) {
            resultObj[currentLineName] = currentLineKilometers;
        }
        currentLine = input.shift();
    }

    let resultArr = Object.entries(resultObj).sort((a, b) => b[1] - a[1])

    let finalObj = {};

    finalObj[`1st place`] = resultArr[0][0];
    finalObj[`2nd place`] = resultArr[1][0];
    finalObj[`3rd place`] = resultArr[2][0];

    for (const kvp of Object.entries(finalObj)) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

}
solve([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787)',
    '%$$B(*&&)i89ll)*&)',
    'R**(on%^&ald992)',
    'T(*^^%immy77)',
    'Ma10**$#g0g0g0i0e',
    'end of race'
])