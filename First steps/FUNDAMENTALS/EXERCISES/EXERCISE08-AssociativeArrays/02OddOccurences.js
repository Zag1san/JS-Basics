function solve(input) {

    let elements = {};

    let inputArray = input.split(" ");

    for (const element of inputArray) {
        if (elements[element.toLowerCase()]) {
            elements[element.toLowerCase()]++;
        } else {
            elements[element.toLowerCase()] = 1;
        }


    };
    let result = []
    let elementEntries = Object.entries(elements);
    
    for (const kvp of elementEntries) {
        if(kvp[1] % 2 !== 0){
            result.push(kvp[0]);
        }
    }
   
   console.log(result.join(" "));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')