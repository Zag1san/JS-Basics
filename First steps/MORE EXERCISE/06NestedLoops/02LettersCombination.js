function solve(input) {

    let startLetter = input.shift();
    let finishLetter = input.shift();
    let excludedLetter = input.shift();
    let combinationCnt = 0;
    let combinations = "";
    
    for (let a = startLetter.charCodeAt(0); a <= finishLetter.charCodeAt(0); a++) {
        if (a === excludedLetter.charCodeAt(0)) {
            continue;
        }
        for (let b = startLetter.charCodeAt(0); b <= finishLetter.charCodeAt(0); b++) {
            if (b === excludedLetter.charCodeAt(0)) {
                continue;
            }
            for (let c = startLetter.charCodeAt(0); c <= finishLetter.charCodeAt(0); c++) {
                if (c === excludedLetter.charCodeAt(0)) {
                    continue;
                }
                let char1 = String.fromCharCode(a);
                let char2 = String.fromCharCode(b);
                let char3 = String.fromCharCode(c);
                combinations += char1 + char2 + char3 + " ";
                combinationCnt++;
            }
        }
    }

    console.log(`${combinations}${combinationCnt}`);



}
solve(['a', 'c', 'b', ''])