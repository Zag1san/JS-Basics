function solve(input) {

    let w = +input.shift();
    let l = +input.shift();
    let h = +input.shift();
    let boxCnt = input.shift();
    let apartmentSpace = w * l * h;
    let usedSpace = 0;
    let isFull = false;

    while (boxCnt !== "Done") {
        boxCnt = +boxCnt;
        usedSpace += boxCnt;
        if (apartmentSpace < usedSpace) {
            isFull = true;
            break;
        }
        boxCnt = input.shift();
    }
    if (isFull) {
        let spaceNeeded = usedSpace - apartmentSpace;
        console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
    } else {
        let spaceLeft = apartmentSpace - usedSpace;
        console.log(`${spaceLeft} Cubic meters left.`);
    }
}
solve([ '10', '1', '2', '4', '6', 'Done' ])