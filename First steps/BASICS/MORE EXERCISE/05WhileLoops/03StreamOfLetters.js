function solve(input) {

    let letter = input.shift();
    let secretWord = "";
    let counterC = 0;
    let counterO = 0;
    let counterN = 0;
    let letterColector = "";
    
        while (letter !== "End") {
            if (!letter.match("^[a-zA-Z0-9]*$")) {
                letter = input.shift();
                continue;
            }
            if (letter === "c" && counterC === 0) {
                letter = input.shift();   
                counterC++;
                continue;
            }
            if (letter === "o" && counterO === 0) {
                letter = input.shift();
                counterO++;
                continue;
            }
            if (letter === "n" && counterN === 0) {
                letter = input.shift();
                counterN++;
                continue;
            }
            if(counterC !== 0 && counterN !== 0 && counterO !== 0) {
                secretWord += letterColector + " ";
                counterO = 0;
                counterC = 0;
                counterN = 0;
                letterColector = "";
                continue;
            }
            
            letterColector += letter;
            letter = input.shift();
        }
        if (counterO + counterC + counterN === 3) {
            console.log(secretWord + letterColector);
        } else {
            console.log(secretWord);
        }
    }
solve([
    'H', 'n',   'e', 'l',
    'l', 'o',   'o', 'c',
    't', 'c',   'h', 'o',
    'e', 'r',   'e', 'n',
    'e', 'End'
  ])