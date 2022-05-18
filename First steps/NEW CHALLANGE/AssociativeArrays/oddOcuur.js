function solve(input) {

    let obj = {};

    let arrayInput = input.split(" ")
    
    
    arrayInput.forEach(element => {
        element = element.toLowerCase();
        obj[element] = 0;
    });


    for (let element of arrayInput) {
        element = element.toLowerCase();
        if(obj[element] !== undefined) {
            obj[element]++;
        }
    }

    let entriesArray = Object.entries(obj);
    let resultArray = [];
    
    for (const kvp of entriesArray) {
        if(kvp[1] % 2 !== 0) {
            resultArray.push(kvp[0]);
        }
    }
    
    console.log(resultArray.join(' '));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
