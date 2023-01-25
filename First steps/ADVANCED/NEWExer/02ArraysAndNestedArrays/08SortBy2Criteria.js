function solve(array) {

    array.sort((a, b) => {
       
        if (a.length === b.length) {
            
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    }).forEach(el => {
        console.log(el);
    });


}
solve(['test', 
'Deny', 
'omen', 
'Default']
);
