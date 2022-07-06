function solve(input) {

    let destinationsString = input.shift();
    let line = input.shift();
    while(line !== 'Travel') {
        
            let commandLIne = line.split(':');

            switch (commandLIne[0].trim()) {
                case 'Add Stop':
                    let addIndex = Number(commandLIne[1]);
                    let addString = commandLIne[2];

                    if (addIndex > -1 && addIndex <= destinationsString.length) {

                        destinationsString = destinationsString.split('');
                        destinationsString.splice(addIndex, 0, addString);
                        destinationsString = destinationsString.join('');
                     
                    }
                    break;
                case 'Remove Stop':

                    let startIndex = Number(commandLIne[1]);
                    let endIndex = Number(commandLIne[2]);
                    let cutLenght = endIndex - startIndex;
                    if (startIndex > -1 && 
                        startIndex < destinationsString.length && 
                        endIndex < destinationsString.length &&
                        endIndex > -1 && 
                        endIndex >= startIndex) {
                        destinationsString = destinationsString.split('');
                        destinationsString.splice(startIndex, cutLenght + 1);
                        destinationsString = destinationsString.join('');
                      
                    }
                    break;
                case 'Switch':

                    let oldstring = commandLIne[1];
                    let newString = commandLIne[2];
                    let regex = new RegExp(oldstring, 'g')
                    destinationsString = destinationsString.replace(regex, newString)

                    break;
            }
            console.log(destinationsString);
            line = input.shift();

    }
    console.log(`Ready for world tour! Planned stops: ${destinationsString}`);
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])