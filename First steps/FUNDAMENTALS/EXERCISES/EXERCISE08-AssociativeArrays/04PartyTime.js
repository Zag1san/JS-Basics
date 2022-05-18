function solve(input) {

    let reservationList = {
        vip: [],
        regular: [],
    };
    let partyIndex = input.indexOf('PARTY')
    let guestList = input.slice(0, partyIndex);
    let guestsComing = input.slice(partyIndex + 1);
    for (let i = 0; i < guestList.length; i++) {
        let currentGuest = guestList[i];
        let firstLetter = Number(currentGuest[0]);
        if (isNaN(firstLetter)) {
            reservationList.regular.push(currentGuest);
        } else if (!isNaN(firstLetter)) {
            reservationList.vip.push(currentGuest);
        }

    }

    let vip = Object.values(reservationList.vip);
    let regular = Object.values(reservationList.regular);
    for (const guest of guestsComing) {
        if(vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        }
        if(regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(vip.length + regular.length);
    vip.forEach(x => console.log(x));
    regular.forEach(x => console.log(x))

}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);