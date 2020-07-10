function solve(number) {

    let counter = 1
    let sum = 0;

    for (let i = 1; i <= 100; i += 2) {
        if(counter <= number) {
            console.log(i) 
            sum += i;
            counter++;
        }
        
    }
    console.log(`Sum: ${sum}`);
}
solve(5)