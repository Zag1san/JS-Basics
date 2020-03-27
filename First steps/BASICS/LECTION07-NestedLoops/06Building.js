function solve(input) {

    let floor = +input.shift();
    let room = +input.shift();
 

        for (let currentFloor = floor; currentFloor > 0; currentFloor--) {
            let counter = "" ;
            for (let currentRoom = 0; currentRoom < room; currentRoom++) {
                if (currentFloor === floor) {
                    counter += `L${currentFloor}${currentRoom} `;
                } else if (currentFloor % 2 === 0) {
                    counter += `O${currentFloor}${currentRoom} `;
                } else {
                    counter += `A${currentFloor}${currentRoom} `;
                }   
                
            }
            console.log(counter)
        }
    
}
solve([ '6', '4' ])