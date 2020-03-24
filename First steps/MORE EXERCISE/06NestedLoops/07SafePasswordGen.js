function solve(input) {

    let first = +input.shift();
    let second = +input.shift();
    let maxPassCnt = +input.shift();
    let passCnt = 0;
    let generatedPass = "";
    let a = 35;
    let b = 64;

        for(let i = 1; i <= first; i++) {
            if(passCnt === maxPassCnt) {
                break;
            }
            for(let j = 1; j <= second; j++) {
                generatedPass += String.fromCharCode(a) + String.fromCharCode(b) + i + j + String.fromCharCode(b) + String.fromCharCode(a) + "|";
                a++;
                b++;
                passCnt++;
                if(a > 55) {
                    a = 35;
                }
                if(b > 96) {
                    b = 64;
                }
                if(passCnt === maxPassCnt) {
                    break;
                }
            }
            
            
        }
        console.log(generatedPass);
}
solve([20, 50, 10])