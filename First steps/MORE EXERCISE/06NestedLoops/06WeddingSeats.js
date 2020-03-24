function solve(input) {

    let lastSector = input.shift();
    let firstSecRows = +input.shift();
    let oddRowSeats = +input.shift();
    let evenRowSeats = oddRowSeats + 2;
    let counter = 0;

    for (let sec = 65; sec <= lastSector.charCodeAt(0); sec++) {
        if (sec > 65) {
            firstSecRows++;
        }
        for (let row = 1; row <= firstSecRows; row++) {
            let seatCh = 97;
            
            for (let seat = 1; seat <= 24; seat++) {

                if (row % 2 === 1 && seat > oddRowSeats) {
                    break;
                }
                if (row % 2 === 0 && seat > evenRowSeats) {
                    break;
                }
                console.log(`${String.fromCharCode(sec)}${row}${String.fromCharCode(seatCh)}`);
                seatCh++;
                counter++;
            }

        }
    }
    console.log(counter);
}

solve(['C', '4', '2'])