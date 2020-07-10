function mathPower(num, power) {

    let result = 1;
    
    for(let i = 0; i <= power; i++) {
        result *= num;
    }
    
    return result;
    
}

 let result = mathPower(2, 8);
 console.log(result);
 