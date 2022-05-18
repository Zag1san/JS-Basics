function charsInRange(firstChar, secondChar) {

    let result = "";
    let firstAsciiNum = firstChar.charCodeAt(0);
    let secondAsciiNum = secondChar.charCodeAt(0);
    
    if (firstAsciiNum < secondAsciiNum) {
        for(let i = firstAsciiNum + 1; i < secondAsciiNum; i++) {
            
            result += String.fromCharCode(i) + " ";
        }

    } else if(secondAsciiNum < firstAsciiNum) {
        for(let i = secondAsciiNum + 1; i < firstAsciiNum; i++) {

            result += String.fromCharCode(i) + " ";
        }
    }


    console.log(result);


}
charsInRange('a', 'd')