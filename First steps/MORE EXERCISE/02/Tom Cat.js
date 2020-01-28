function solve(input) {
    let holydays = Number(input.shift(2));
    let workdays = 365 - holydays;
    let tomNormativePlay = 30000;
    let minutesOfYearPlay = workdays * 63 + holydays * 127;
    if (tomNormativePlay > minutesOfYearPlay) {
        let minutesLeft = tomNormativePlay - minutesOfYearPlay;
        let hoursOfYearPlay = minutesLeft / 60;
        let rHoursOfPlay = Math.floor(hoursOfYearPlay);
        let minutesAfterHours = (hoursOfYearPlay - rHoursOfPlay) * 60;
        let rminutesAfterHours = Math.round(minutesAfterHours);
        console.log(`Tom sleeps well`);
        console.log(`${rHoursOfPlay} hours and ${rminutesAfterHours} minutes less for play`);
    } else if (tomNormativePlay < minutesOfYearPlay) {
        let minutesMore = minutesOfYearPlay - tomNormativePlay;
        let hoursMore = minutesMore / 60;
        let rHoursMore = Math.floor(hoursMore);
        let minutesMoreLeft = (hoursMore - rHoursMore) * 60;
        let rMinutesMoreLeft = Math.round(minutesMoreLeft);
        console.log(`Tom will run away`);
        console.log(`${rHoursMore} hours and ${rMinutesMoreLeft} minutes more for play`); 
    }
}
solve(["113"])