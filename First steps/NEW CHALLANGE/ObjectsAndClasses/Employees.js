function employees(input) {

    class Employee {

            constructor(name, personalNumber) {
                this.name = name;
                this.number = personalNumber;
            }            
    }

    let employeesArr = [];

    input.forEach(element => {
       let employ = new Employee(element, element.length);
        employeesArr.push(employ);
    });

    for (const employee of employeesArr) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
