function solve(steps, stepLength, speed) {

let kilometers = (steps * stepLength) / 1000;
let time = kilometers / speed;
let hours = time / 60;
let rHours = Math.floor(hours);
let minutes = (hours - rHours) * 60;
console.log(minutes);

}
solve(4000, 0.60, 5)