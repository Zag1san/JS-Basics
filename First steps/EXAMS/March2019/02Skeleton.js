function solve(input) {

    let controlMinutes = +input.shift();
    let controlSeconds = +input.shift();
    let trackLength = +input.shift();
    let secondsFor100m = +input.shift();
    let totalTimeInSeconds = controlMinutes * 60 + controlSeconds;
    let martinTime = (trackLength / 100) * secondsFor100m;
    let delayTime = (trackLength / 120) * 2.5; 
    let overallTime = martinTime - delayTime
        if (overallTime <= totalTimeInSeconds){
            console.log(`Marin Bangiev won an Olympic quota!`)
            console.log(`His time is ${overallTime.toFixed(3)}.`)
        } else {
            let timeBehind = overallTime - totalTimeInSeconds;
            console.log(`No, Marin failed! He was ${timeBehind.toFixed(3)} second slower.`)
        }  
}
solve([ '1', '20', '1546', '12', '' ])