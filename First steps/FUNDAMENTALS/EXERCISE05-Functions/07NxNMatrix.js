function nXnMatrix(num) {

    let row = printRow(num);

    function printRow(n) {

        let result = " ";

        for(let i = 0; i < n; i++) {
            result += n + " ";
        }
        return result;
    }

        for(let i = 0; i < num; i++) {
            
            console.log(row);
            
        }


}
nXnMatrix(7)