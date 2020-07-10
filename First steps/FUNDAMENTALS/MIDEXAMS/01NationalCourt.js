function solve(input) {

    let firstEmployee = Number(input.shift());
    let secondEmployee = Number(input.shift());
    let thirdEmployee = Number(input.shift());
    let numOfPeolpe = Number(input.shift());
    let peoplePerHour = firstEmployee + secondEmployee + thirdEmployee;
    

    let hourCounter = 0;
   
    while (numOfPeolpe > 0) {

        
        hourCounter++;
        
        if(hourCounter % 4 === 0) {
            continue;
        }

        numOfPeolpe -= peoplePerHour;

    }

    console.log(`Time needed: ${hourCounter}h.`);

}

solve([ '5', '6', '4', '20' ]   
)
    ;