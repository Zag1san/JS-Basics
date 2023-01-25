function solve(list) {
    let count = 1;
    list.sort((a, b) => a.localeCompare(b)).forEach(name => {

        console.log(`${count}.${name}`);
        count++;
    });

}
solve(["John", "Bob", "Christina", "Ema"])