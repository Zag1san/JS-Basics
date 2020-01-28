function solve(input) {
    let firstname = input.shift();
    let lastname = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    console.log(`You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`);
}
solve( ["Ivan", "Nikolov", "32", "Plovdiv"] )