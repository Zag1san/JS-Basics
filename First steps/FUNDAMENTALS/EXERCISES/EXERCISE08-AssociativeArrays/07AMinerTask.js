function minerTask(input) {

    let resuorcesObj = {

    }

    for (let i = 0; i < input.length; i += 2) {
        if (!resuorcesObj[input[i]]) {
            resuorcesObj[input[i]] = Number(input[i + 1]);
        } else {
            resuorcesObj[input[i]] += Number(input[i + 1])
        }
    }
    let resourcesKVP = Object.entries(resuorcesObj);
    resourcesKVP.forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    })
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);