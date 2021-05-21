function solve(input) {

   class Employee {

      constructor(name, number) {
         this.name = name;
         this.number = number;

      }
   }
   let employeeInfoArr = [];
   for (let i = 0; i < input.length; i++) {
      let currentNumber = input[i].length;
      let name = input[i];
      let currentEmployee = new Employee(name, currentNumber);
      employeeInfoArr.push(currentEmployee);

   }

   employeeInfoArr.forEach((x) => console.log(`Name: ${x.name} -- Personal Number: ${x.number}`));

}
solve([
   'Silas Butler',
   'Adnaan Buckley',
   'Juan Peterson',
   'Brendan Villarreal'
]
)
