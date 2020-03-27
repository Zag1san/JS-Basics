function solve(input) {

    let bottles = +input.shift();
    let liquid = bottles * 750;
    let utensils = input.shift();
    let dishesCnt = 0;
    let potsCnt = 0;
    let washCounter = 1;
    let isLiquidUsed = false;

        while (utensils !== "End") {
            utensils = +utensils;
          if (washCounter % 3 === 0) {
              liquid -= utensils * 15;
              potsCnt += utensils;
          } else {
              liquid -= utensils * 5;
              dishesCnt += utensils;
          }  
          if (liquid < 0) {
              isLiquidUsed = true;
              break;
          }
          utensils = input.shift();
          washCounter++;

        }
        if (isLiquidUsed) {
            
            console.log(`Not enough detergent, ${Math.abs(liquid)} ml. more necessary!`);
        } else {
            console.log(`Detergent was enough!`);
            console.log(`${dishesCnt} dishes and ${potsCnt} pots were washed.`);
            console.log(`Leftover detergent ${liquid} ml.`)
        }
}
solve([
    '1',  '10', '15',
    '10', '12', '13',
    '30'
  ])