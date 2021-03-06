function passwordValidator(password) {
  
    function checkLength(passLength) {
        let isValid = true;
        if(passLength < 6 || passLength > 10) {
            isValid = false;
        }
        return isValid;
    }

    function checkDigits(password) {
        
        let digitCounter = 0;
        
        for(let ch of password) {
            if(isBetweenRange(ch, '0', '9')) {
                digitCounter++;

                if(digitCounter === 2) {
                    break;
                }
            }
        }
        return digitCounter === 2 ? true : false;
    }

    function isBetweenRange(ch, start, end) {
        return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
    }

    function checkOtherSigns(password) {
        let isValid = true;
        
        for(let ch of password) {
            if (!(
                isBetweenRange(ch, 'A', 'Z') || 
                isBetweenRange(ch, 'a', 'z') || 
                isBetweenRange(ch, '0', '9'))
             ) {
                isValid = false;
            }
        }
        return isValid;
    }

    let checkLengthVar = checkLength(password.length);
    if(!checkLengthVar) {
        console.log('Password must be between 6 and 10 characters');

    }
    let checkOtherSignsVar = checkOtherSigns(password);
    if(!checkOtherSignsVar) {
        console.log('Password must consist only of letters and digits');
        
    }
    let checkDigitsVar = checkDigits(password);
    if (!checkDigitsVar) {
        console.log('Password must have at least 2 digits');
        
    }
    if(checkLengthVar && checkOtherSignsVar && checkDigitsVar) {
        console.log('Password is valid');
        
    }
}
passwordValidator('MyPass123')