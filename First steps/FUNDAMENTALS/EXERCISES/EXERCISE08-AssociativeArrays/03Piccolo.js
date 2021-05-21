function solve(input) {

    let parking = [];

    for (const line of input) {
        let [command, carNumber] = line.split(", ");
        if (command === "IN" && !parking.includes(carNumber)) {
            parking.push(carNumber);
        } else if (command === "OUT" && parking.includes(carNumber)) {
            let carIndex = parking.indexOf(carNumber);
            parking.splice(carIndex, 1);
        }
    }

   parking.sort((a,b) => a.localeCompare(b))

   if(parking.length !== 0) {

        console.log(parking.join(`\n`));
   } else {
       console.log("Parking Lot is Empty");
   }
}
solve(['IN, CA2844AA',
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