function solve(input) {
    let dogs = Number(input.shift());
    let pets = Number(input.shift());
    let dogfood = 2.50;
    let otherfood = 4.00;
    let zoopet = dogs * dogfood;
    let otherpet = pets * otherfood;
    let overall = (zoopet + otherpet).toFixed(2);
    console.log(overall, "lv.");
}
solve( [ "5", "4" ] )