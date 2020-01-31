function solve(input) {
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arrivalHour = Number(input.shift());
    let arrivalMinutes = Number(input.shift());
    let examTotalMinutes = examHour * 60 + examMinutes;
    let arrivalTotalMinutes = arrivalHour * 60 + arrivalMinutes;
        if (arrivalTotalMinutes > examTotalMinutes) {
            console.log(`Late`);
            let timeLate = arrivalTotalMinutes - examTotalMinutes;
            if (timeLate < 60) {
                console.log(`${timeLate} minutes after the start`);
            } else {
                let hoursLate = Math.floor(timeLate / 60);
                let minutesLate = timeLate % 60;
                if (minutesLate < 10) {
                    console.log(`${hoursLate}:0${minutesLate} hours after the start`);
                } else {
                    console.log(`${hoursLate}:${minutesLate} hours after the start`);
                }
            }
        } else if (examTotalMinutes - arrivalTotalMinutes <= 30) {
            console.log(`On time`);
            let timeShort = examTotalMinutes - arrivalTotalMinutes;
            if (timeShort !== 0) {
                console.log(`${timeShort} minutes before the start`);
            } 
        } else if (examTotalMinutes - arrivalTotalMinutes > 30) {
            console.log(`Early`);
            let timeEarly = examTotalMinutes - arrivalTotalMinutes;
            let hoursEarly = Math.floor(timeEarly / 60);
            let minutesEarly = timeEarly % 60;
            if (timeEarly < 60) {
                console.log(`${timeEarly} minutes before the start`);
            } else {
                if (minutesEarly < 10) {
                    console.log(`${hoursEarly}:0${minutesEarly} hours before the start`);
                } else {
                    console.log(`${hoursEarly}:${minutesEarly} hours before the start`);
                }
            }
        } 
}
solve(["11", "30", "10", "55"])