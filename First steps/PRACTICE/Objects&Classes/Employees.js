function solve(input) {

   let listOfEmployees = [];

   for (let i = 0; i < input.length; i++) {
      let currentEmployee = {};
      currentEmployee.name = input[i];
      currentEmployee.personalNumber = input[i].length;
      listOfEmployees.push(currentEmployee);


   }
   for (const employee of listOfEmployees) {

      console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

   }


}
solve([
   'Silas Butler',
   'Adnaan Buckley',
   'Juan Peterson',
   'Brendan Villarreal'
]
)
