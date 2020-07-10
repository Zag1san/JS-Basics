function solve(firstName, lastName, hairColor) {

    let person = { name: firstName, lastName: lastName, hairColor: hairColor };

    let stringifyedPerson = JSON.stringify(person);
    
    console.log(stringifyedPerson);


}
console.log(
    solve('George',
        'Jones',
        'Brown'
    )
);