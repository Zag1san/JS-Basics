function login(arrayOfStrings) {

    let username = arrayOfStrings.shift();
    let password = '';
    let passwordCounter = 0;
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];

    }

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentPasswordInput = arrayOfStrings[i];
        if (currentPasswordInput === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if (passwordCounter === 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (currentPasswordInput !== password) {
            console.log('Incorrect password. Try again.');
            passwordCounter++;
        }

    }

}

login([ 'sunny', 'rainy', 'cloudy', 'sunny', 'not sunny' ])