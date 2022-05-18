function passwordValidator(password) {

    let lengthValidator = checkLength(password);
    let digitValidator = checkDigit(password);
    let lettersAndDigitsValidator = checkLettersAndDigits(password);

    function checkLength(pass) {

        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }

    };

    function checkDigit(pass) {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            let currentEl = pass[i];
            currentEl = currentEl.charCodeAt(0);
            if (currentEl >= 48 && currentEl <= 57) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }

    };

    function checkLettersAndDigits(pass) {
        let isTrue = true;
        for (let i = 0; i < pass.length; i++) {
            let currentEl = pass[i];
            currentEl = currentEl.charCodeAt(0);
            if ((currentEl >= 48 && currentEl <= 57) || (currentEl >= 65 && currentEl <= 90) || (currentEl >= 97 && currentEl <= 122)) {
                isTrue = true;
            } else {
                isTrue = false;
                break;
            }

        }
        return isTrue;
    };

    if(lengthValidator && digitValidator && lettersAndDigitsValidator) {
        console.log('Password is valid');
    }  
    if(!lengthValidator) {
        console.log('Password must be between 6 and 10 characters');
    } 
    if(!lettersAndDigitsValidator) {
        console.log('Password must consist only of letters and digits');
    } 
    if(!digitValidator) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('Pa$s$s');