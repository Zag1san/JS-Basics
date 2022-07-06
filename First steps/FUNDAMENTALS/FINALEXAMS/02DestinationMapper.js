function solve(input) {

    let match1 = /=[A-Z][a-z]{2,}=/g
    let match2 = /\/[A-Z][a-z]{2,}\//g
    let travelPoints = 0;
    let resultArr = []
    let firstMatch = input.match(match1);
    if (firstMatch !== null) {
        firstMatch.forEach(el => {
        let newEl = el.slice(1, el.length - 1);
            resultArr.push(newEl);
        });
    }
    let secondMatch = input.match(match2);
    if (secondMatch !== null) {
        secondMatch.forEach(el => {
            let newEl = el.slice(1, el.length - 1);
                resultArr.push(newEl);
            });
    }
    if (resultArr !== undefined) {
        resultArr.forEach(element => {
            let currentPoints = element.length;
            travelPoints += currentPoints;
        });
        console.log(`Destinations: ${resultArr.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
    console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
    }
}
solve("ThisIs some InvalidInput")