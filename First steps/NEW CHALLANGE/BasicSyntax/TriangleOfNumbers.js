function triangleOfNumbers(n) {

    let currentLine = '';
    for (let i = 1; i <= n; i++) {
        let currentNum = i;
        while (currentNum > 0) {
            currentLine += i + ' ';
            currentNum--
        }
       console.log(currentLine);
       currentLine = ''; 
    }

}
triangleOfNumbers(6)