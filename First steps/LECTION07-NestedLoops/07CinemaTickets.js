function solve(input) {

    let movie = input.shift();
    let freeSpace = +input.shift();
    let ticketType = input.shift();
    let totalTickets = 0;
    let currentMoveieTickets = 0;
    let studentCnt = 0;
    let standardCnt = 0;
    let kidCnt = 0;
    let spaceLeft = freeSpace;

    while (movie !== "Finish") {
        while (ticketType !== "End") {
            totalTickets++;
            currentMoveieTickets++;
            switch (ticketType) {
                case "student":
                    studentCnt++; break;
                case "standard":
                    standardCnt++; break;
                case "kid":
                    kidCnt++; break;
            }
            spaceLeft--;
            if (spaceLeft === 0) {
                break;
            }
            ticketType = input.shift();
        }
        let percentageFull = (currentMoveieTickets / freeSpace) * 100;
        console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`)
        movie = input.shift();
        freeSpace = +input.shift();
        ticketType = input.shift();
        spaceLeft = freeSpace;
        currentMoveieTickets = 0;
    }
    let percentageStudents = (studentCnt / totalTickets) * 100;
    let percentageStandard = (standardCnt / totalTickets) * 100;
    let percentageKid = (kidCnt / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudents.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKid.toFixed(2)}% kids tickets.`);

}
solve([
    'The Matrix', '20',
    'student',    'standard',
    'kid',        'kid',
    'student',    'student',
    'standard',   'student',
    'End',        'The Green Mile',
    '17',         'student',
    'standard',   'standard',
    'student',    'standard',
    'student',    'End',
    'Amadeus',    '3',
    'standard',   'standard',
    'standard',   'Finish'
  ])