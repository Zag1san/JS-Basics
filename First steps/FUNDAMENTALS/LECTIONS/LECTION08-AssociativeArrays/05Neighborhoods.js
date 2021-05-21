function solve(input) {

    let neightbourhoods = {};

    let hoodNames = input.shift().split(", ");

    for (const name of hoodNames) {
        neightbourhoods[name] = [];
    }

    for (const line of input) {
        let [hood, person] = line.split(" - ");
        if(neightbourhoods[hood]) {

            neightbourhoods[hood].push(person);
        } 

    }
    let hoodEntries = Object.entries(neightbourhoods);

    hoodEntries.sort((a,b) => b[1].length - a[1].length);
    
    for (const kvp of hoodEntries) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (const name of kvp[1]) {
            console.log(`--${name}`);
        }
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)
