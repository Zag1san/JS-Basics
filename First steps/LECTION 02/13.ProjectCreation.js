function solve(input) {
    let name = input.shift();
    let project = Number(input.shift());
    let hours = project * 3;
    console.log(`The architect ${name} will need ${hours} to complete ${project} project/s.`);
}
solve( [ "George", "4" ] )