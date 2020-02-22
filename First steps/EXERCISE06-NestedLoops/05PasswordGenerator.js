function solve(input) {

    let n = +input.shift();
    let l = +input.shift();
    let result = "";
        for(let a = 1; a < n; a++) {
            for(let b = 1; b < n; b++) {
                for(let c = 97; c < 97 + l; c++) {
                    let firstChar = String.fromCharCode(c);
                    for(let d = 97; d < 97 + l; d++) {
                        let secondChar = String.fromCharCode(d);
                        for(let e = 1; e <= n; e++) {
                            if(a < e && b < e) {
                                result += a + "" + b + firstChar + secondChar + e + " ";
                            }
                           
                        }
                    }
                }
            }
        }
    console.log(result)
}
solve([3, 1])