function solve(input) {
    let count = 1;
    input = input.sort((a, b) => a.localeCompare(b)).forEach(name => {

        console.log(`${count}.${name}`);
        count++;
    });


}
solve(["John", "Bob", "Christina", "Ema"])