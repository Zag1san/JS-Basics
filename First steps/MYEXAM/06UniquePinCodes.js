function solve(input) {

    let n1 = +input.shift();
    let n2 = +input.shift();
    let n3 = +input.shift();

    for (let a = 2; a <= n1; a += 2) {
        for(let b = 2; b <= n2; b++) {
            for(let c = 2; c <= n3; c += 2) {
                if (b === 2 || b === 3 || b === 5 || b === 7) {
                    console.log(a + " " +  b + " " + c);
                }
            }
        }
    }
     
}
solve([ '8', '2', '8' ])