function partyTime(input) {

    let guestList = [];
    let guestsComing = [];
    let guestsMissing = [];
    let command = input.shift();
    while (command !== 'PARTY') {
        guestList.push(command);
        command = input.shift();
    }
    guestsComing = input.slice();

    for (let i = 0; i < guestList.length; i++) {
        let currentGuestInList = guestList[i];
        if(guestsComing.includes(currentGuestInList)) {
            continue;
        } else {
            guestsMissing.push(currentGuestInList);
        }
        
    }
    let sortingFunc = function(a, b) {
        let first = a.split('');
        let second = b.split('');
        let firstLetter = Number(first[0]);
        let secondLetter = Number(second[0]);
        if(firstLetter !== NaN && secondLetter === NaN) {
            return a;
        } else if (firstLetter === NaN && secondLetter !== NaN) {
            return b;
        } else if(firstLetter === NaN && secondLetter === NaN) {
            return a;
        } else if(firstLetter !== NaN && secondLetter !== NaN) {
            return a;
        }
    };
    guestsMissing.sort(sortingFunc);

    console.log(guestsMissing.length);
    console.log(guestsMissing.join('\n'));

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)