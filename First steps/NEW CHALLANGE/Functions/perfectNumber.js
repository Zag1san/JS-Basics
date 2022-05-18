function perfectNumber(number) {


    let result = 0;

    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            result += i;
        }
    }
    
    if(number === result) {
        return 'We have a perfect number!'
        
    } else {
        return "It's not so perfect."
        
    }
    
}
console.log(perfectNumber(28));     