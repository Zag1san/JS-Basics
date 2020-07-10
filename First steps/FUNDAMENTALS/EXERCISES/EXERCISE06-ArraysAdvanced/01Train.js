function train(arr) {

    let copyArr = arr.slice();
    let waggonsWithPassangersArr = copyArr.shift().split(" ").map(Number);
    let maxPassengersForWagon = Number(copyArr.shift());

    for (const element of copyArr) {
        let num = 0;
        if (element.includes(" ")) {

            let currentElement = element.split(" ");

            num = Number(currentElement[1]);
            waggonsWithPassangersArr.push(num);
        } else {
            num = Number(element);
            for (let i = 0; i < waggonsWithPassangersArr.length; i++) {
                if (waggonsWithPassangersArr[i] + num <= maxPassengersForWagon) {
                    waggonsWithPassangersArr[i] += num;
                    break;
                }
            }
        }
        
    }

    console.log(waggonsWithPassangersArr.join(" "));

}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)