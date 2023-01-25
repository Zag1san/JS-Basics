function sameNumbers(number) {

    let areSame = true;
    let sum = 0;
    let stringArr = String(number).split('');;
    
    for (let i = 0; i < stringArr.length; i++) {
        let nextStr = stringArr[i + 1];
        if(stringArr[i] !== nextStr && nextStr !== undefined) {
            areSame = false;
        }
        sum += Number(stringArr[i]);
    }
    
    console.log(areSame);   
    console.log(sum);

}
sameNumbers(222)