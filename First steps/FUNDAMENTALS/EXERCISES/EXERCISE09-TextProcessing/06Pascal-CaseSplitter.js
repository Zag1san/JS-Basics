function solve(string) {

    let strArr = string.split("");
    let currentWord = strArr[0];
    let resultArr = [];
    for (let i = 1; i < strArr.length; i++) {
        let currentLetter = strArr[i];
        if(currentLetter === currentLetter.toUpperCase()) {
            resultArr.push(currentWord);
            currentWord = "";
            currentWord += currentLetter;
        } else {
            currentWord += currentLetter;
        }
        
    }
    resultArr.push(currentWord);
    console.log(resultArr.join(", "));

}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')