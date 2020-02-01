function solve(input) {
    let worldRecord = Number(input.shift());
    let lengthMeters = Number(input.shift());
    let meterPerSeconds = Number(input.shift());
    let ivanTime = lengthMeters * meterPerSeconds;
    let timesDelayed = Math.floor(lengthMeters / 15);
    let secondsDelay = timesDelayed * 12.5;
    let ivanFinishTime = ivanTime + secondsDelay;
    let failedTime = ivanFinishTime - worldRecord;
    if (ivanFinishTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanFinishTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${failedTime.toFixed(2)} seconds slower.`);
    }
}
solve(["10464", "1500", "20"])