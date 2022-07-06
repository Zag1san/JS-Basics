function solve(input) {

    let fileObject = {};

    let locationArr = input.split('\\');

    let lastLocation = locationArr[locationArr.length - 1];

    let fileAndExt = lastLocation.split('.');

    let extension = fileAndExt[fileAndExt.length - 1];
    let file = lastLocation.replace(`.${extension}`, '')

    fileObject['File name'] = file;
    fileObject['File extension'] = extension;

    let objectKVP = Object.entries(fileObject);

    for (const kvp of objectKVP) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
        
    }

}
solve('C:\\Internal\\training-internal\\Template.pptx')