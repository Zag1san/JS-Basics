function piccolo(input) {

    let parkingArray = [];

    input.forEach(element => {
        let [command, car] = element.split(', ');
        if (command === 'IN' && !parkingArray.includes(car)) {
            parkingArray.push(car);
        } else if (command === 'OUT' && parkingArray.includes(car)) {
            let carIndex = parkingArray.indexOf(car);
            parkingArray.splice(carIndex, 1);
        }
    });

    parkingArray.sort((a, b) => a.localeCompare(b));

    if(parkingArray.length !== 0) {
        console.log(parkingArray.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
