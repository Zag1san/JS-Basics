function loginProblem(input) {

    let username = input.shift();
    let password = "";
    let incorrectCounter = 1;
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let currentInput = input.shift();
    while (currentInput !== password) {
        console.log('Incorrect password. Try again.');
        incorrectCounter++;
        if (incorrectCounter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        currentInput = input.shift();
    }
    if(currentInput === password) {
        console.log(`User ${username} logged in.`);
    }

}
loginProblem(['sunny','rainy','cloudy','sunny','not sunny'])