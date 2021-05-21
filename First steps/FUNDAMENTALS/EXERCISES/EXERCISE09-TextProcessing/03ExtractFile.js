function solve(text) {
    let fileObj = {};
    let textArray = text.split("\\")
    let wantedFile = textArray[textArray.length - 1];

    let fileExtension = wantedFile.split(".");
    fileExtension = fileExtension[fileExtension.length - 1];
    let fileName = wantedFile.replace(`.${fileExtension[fileExtension.length - 1]}`, "");
    fileObj["File name"] = fileName;
    fileObj["File extension"] = fileExtension;

    let ObjKvpArr = Object.entries(fileObj);

    for (const kvp of ObjKvpArr) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')