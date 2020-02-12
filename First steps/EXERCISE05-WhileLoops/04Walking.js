function solve(input) {
    let daylySteps = input.shift();
    let daylyGoal = 10000;
    let stepCounter = 0;

    while (daylyGoal > stepCounter) {
        
        if(daylySteps !== "Going home") {
            daylySteps = Number(daylySteps);
            stepCounter += daylySteps;
        } else {
            daylySteps = +input.shift();
            stepCounter += daylySteps;
            break;
        }
        
        daylySteps = input.shift();
    }
    if (stepCounter < daylyGoal) {
        let stepsNeeded = daylyGoal - stepCounter;
        console.log(`${stepsNeeded} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
    }
} 
solve([
    '125',  '250',
    '4000', '30',
    '2678', '4682',
    ''
  ])