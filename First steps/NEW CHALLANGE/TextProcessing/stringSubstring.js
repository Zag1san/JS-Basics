function solve(word, sentence) {

    let caseInsWord = word.toLowerCase()
    let caseInsensitiveLower = sentence.toLowerCase();
    
    let textArr = caseInsensitiveLower.split(' ')
    
    if(textArr.includes(caseInsWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
solve('javascript',
'JavaScript is the best programming language'
)