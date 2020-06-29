function calculator(first, second, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply':
        operator = multiply;
            break;
        case 'divide':
            operator = divide;

            break;
        case 'add':
            operator = add;

            break;
        case 'subtract':
            operator = subtract;

            break;
        
    }

        return operator(first, second)
}
let result = calculator(50,
    13,
    'subtract'
    );
console.log(result);
