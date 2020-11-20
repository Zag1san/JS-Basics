function solve(input) {

    let employees = [];
    input.forEach(name => {
        const employee = {
           name: name,
           number: name.length,
       };
       employees.push(employee);
    });

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
    //console.log(employees);
    
}
console.log(
    solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
    )
);