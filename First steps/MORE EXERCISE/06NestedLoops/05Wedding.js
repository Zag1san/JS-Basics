function solve(input) {

    let menNum = +input.shift();
    let womenNum = +input.shift();
    let tables = +input.shift();
    let takenTables = 0;
    let matches = "";

        for(let a = 1; a <= menNum; a++) {
            for(let b = 1; b <= womenNum; b++) {
                
                if(takenTables >= tables) {
                    break;
                }
                matches += `(${a} <-> ${b})` + " ";
                takenTables++;
            }
        }
    console.log(matches)
}
solve([5, 8, 40])