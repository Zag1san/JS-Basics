function solve(input) {

    let mappedInput =input.map(Number)
    let cubicYardsPerDay = 195;
    let costOfWall = 0;
    let concreteEachDay = [];
    let rotation = 0;
    for (let i = 0; i < mappedInput.length; i++) {
        let currentSection = mappedInput[i];
        let dayCount = 0;
            while(currentSection < 30) {
                if(concreteEachDay[dayCount] === undefined){
                    concreteEachDay[dayCount] = cubicYardsPerDay;
                } else {
                    concreteEachDay[dayCount] += cubicYardsPerDay;
                }
                costOfWall += 1900;
                dayCount++;
                currentSection++;
               }     
        rotation++;
    }
    let totalWallCost = concreteEachDay.reduce((a,b) => a +b, 0);
    totalWallCost *= 1900;
        console.log(concreteEachDay.join(", "));
        console.log(`${totalWallCost} pesos`);
}
solve([17, 22, 17, 19, 17]);