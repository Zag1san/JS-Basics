function solve(input) {

    let someObject = JSON.parse(input);


    for (const key in someObject) {

        console.log(`${key}: ${someObject[key]}`);

    }


}
console.log(
    solve('{"name": "George", "age": 40, "town": "Sofia"}')
);