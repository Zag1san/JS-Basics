function solve(input) {

    let w = +input.shift();
    let l = +input.shift();
    let h = +input.shift();
    let compCnt = input.shift();
    let roomSpace = w * l * h;
    let usedSpace = 0;
    let isFull = false;

        while(compCnt !== "Done") {
            compCnt = +compCnt;
            usedSpace += compCnt;
            if (roomSpace < usedSpace) {
                isFull = true;
                break;
            }
            compCnt = input.shift();
        }
        if(isFull) {
            let spaceNeeded = usedSpace - roomSpace;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
        } else {
            let spaceLeft = roomSpace - usedSpace;
            console.log(`${spaceLeft} Cubic meters left.`);
        }

}
solve([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ])