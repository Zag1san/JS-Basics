function solve(input) {

    let str1 = input[0];
    let str2 = input[1];
    let chosenWord = input[2].toUpperCase();
    let counter = 0;
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];

    let concatenatedString = str1.concat(str2);
    let result = []

    for (let i = 0; i < concatenatedString.length; i++) {
        let currentLetter = concatenatedString[i];
        
        if (vowelsArr.includes(currentLetter)) {
            if (chosenWord.length > counter) {
                result.unshift(chosenWord[counter])
                counter++;
            } else {
                counter = 0;
                result.unshift(chosenWord[counter])
                counter++;
            }

        } else {
            result.unshift(currentLetter);
        }
        
    }
    console.log(`Your generated password is ${result.join('')}`);

}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
])
