function solve(input) {

    let neighbourhoodArr = input.shift().split("@").map(Number);
    let [command, jump] = input.shift().split(" ");
    jump = Number(jump)
    let currentHouseIndex = 0;
    while (command !== "Love!") {
        for (let i = 0; i < neighbourhoodArr.length; i++) {
            currentHouseIndex += jump;
            if (currentHouseIndex >= neighbourhoodArr.length) {
                currentHouseIndex = 0;
            }
            if (neighbourhoodArr[currentHouseIndex] === 0) {
                console.log(`Place ${currentHouseIndex} already had Valentine's day.`);
            } else {
                neighbourhoodArr[currentHouseIndex] -= 2
                if (neighbourhoodArr[currentHouseIndex] === 0) {
                console.log(`Place ${currentHouseIndex} has Valentine's day.`);
                }
            }
            [command, jump] = input.shift().split(" ");
            jump = Number(jump);
            if(command === "Love!") {
                break;
            }
        }

    }

    console.log(`Cupid's last position was ${currentHouseIndex}.`);
    
    let isSuccess = true;
    let houseCount = 0;
    for (const house of neighbourhoodArr) {     
        if (house !== 0) {
            isSuccess = false
            houseCount++;
        }
    }
  
    if (isSuccess) {
        console.log("Mission was successful.");
    } else {
        
        console.log(`Cupid has failed ${houseCount} places.`);
    }

}

 // РЕШЕНИЕ БЕЗ ФОР ЦИКЪЛ \/

// function solve(input) {

//     let neighbourhoodArr = input.shift().split("@").map(Number);
//     let commands = input.shift();
//     let currentHouseIndex = 0;
//     while (commands !== "Love!") {
//         let tokens = commands.split(" ");
//         let jump = +tokens[1];

//         currentHouseIndex += jump;
//         if (currentHouseIndex >= neighbourhoodArr.length) {
//             currentHouseIndex = 0;
//         }
//         if (neighbourhoodArr[currentHouseIndex] === 0) {
//             console.log(`Place ${currentHouseIndex} already had Valentine's day.`);
//         } else {
//             neighbourhoodArr[currentHouseIndex] -= 2
//             if (neighbourhoodArr[currentHouseIndex] === 0) {
//                 console.log(`Place ${currentHouseIndex} has Valentine's day.`);
//             }
//         }

//         commands = input.shift();

//     }

//     console.log(`Cupid's last position was ${currentHouseIndex}.`);

//     let isSuccess = true;
//     let houseCount = 0;
//     for (const house of neighbourhoodArr) {
//         if (house !== 0) {
//             isSuccess = false;
//             houseCount++;
//         }
//     }

//     if (isSuccess) {
//         console.log("Mission was successful.");
//     } else {
//         console.log(`Cupid has failed ${houseCount} places.`);
//     }

// }
solve([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]);