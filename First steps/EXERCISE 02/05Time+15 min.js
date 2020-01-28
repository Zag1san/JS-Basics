function solve(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    let addTime = 15;
    let totalMinutes = minutes + addTime
    if (totalMinutes >= 60){
        hours = hours + 1;
        totalMinutes = totalMinutes - 60;
    } 
    if (hours >= 24) {
        hours = hours - 24;
    }
    if (totalMinutes < 10){
        console.log(`${hours}:0${totalMinutes}`)
    } else {
        console.log(`${hours}:${totalMinutes}`)
    }
}
solve(["11", "59"])