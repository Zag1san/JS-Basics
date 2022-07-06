function solve(text) {

    let charArray = text.split('');
    let result = [];
    
    for (let i = 0; i < charArray.length; i++) {
       let currentChar = charArray[i];
       if(currentChar !== charArray[i + 1]) {
           result.push(currentChar)
       }
        
    }
    console.log(result.join(''));
}
solve('aaaaabbbbbcdddeeeedssaa')
