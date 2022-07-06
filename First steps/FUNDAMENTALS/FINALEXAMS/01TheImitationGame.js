function solve(input) {

    let message = input.shift();

    let line = input.shift();

    while (line !== 'Decode') {

        let [command, firstArg, secondArg] = line.split('|');

        switch (command) {
            case 'Move':
                message = message.substring(Number(firstArg)) + message.substring(0, Number(firstArg));
                break;
            case 'Insert':
                message = message.substring(0, Number(firstArg)) + secondArg + message.substring(Number(firstArg));

                break;
            case 'ChangeAll':
                
               while(message.includes(firstArg)) {
                message = message.replace(firstArg, secondArg);
               }
                break;
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);

}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);
