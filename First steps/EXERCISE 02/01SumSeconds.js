function solve(input) {
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());
    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
solve([ "14", "12", "10" ])