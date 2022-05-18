function solve(num, op1, op2, op3, op4, op5) {
    let myNumber = Number(num);
    let operations = [];
    operations.push(op1, op2, op3, op4, op5);

    for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];
        switch (currentOperation) {
            case 'dice':
                myNumber = Math.sqrt(myNumber);
                console.log(myNumber);
                break;
            case 'spice':
                myNumber += 1;
                console.log(myNumber);
                break;
            case 'chop':
                myNumber = myNumber / 2;

                console.log(myNumber);
                break;
            case 'bake':
            myNumber *= 3;
            console.log(myNumber);
                break;
            case 'fillet':
            myNumber = myNumber * 0.8;
            console.log(myNumber.toFixed(1));
                break;

        }

    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')