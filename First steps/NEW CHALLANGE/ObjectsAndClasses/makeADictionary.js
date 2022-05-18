function solve(input) {

    let dictionary = {};
    let paresdInput = input.map(JSON.parse)

    paresdInput.forEach(line => {
        let tokens = Object.entries(line);
       
        let term = tokens[0][0];
       
        let definition = tokens[0][1];
    
        dictionary[term] = definition;
        
    });

    let sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b));
    
    sortedDictionary.forEach(line => {

        console.log(`Term: ${line[0]} => Definition: ${line[1]}`);
    })

}
solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])