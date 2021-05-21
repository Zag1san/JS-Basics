function solve(words, templates) {

    let wordsArr = words.split(", ");
    let templateLenght = 0;
    let replaceable = "";
    for (i = 0; i < wordsArr.length; i++) {
        templateLenght = wordsArr[i].length;
        replaceable = '*'.repeat(templateLenght);

        templates = templates.replace(replaceable, wordsArr[i]);



    }

    console.log(templates);
}
solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'

)