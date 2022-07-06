function CompanyUsers(input) {

    let companiesObj = {

    };

    input.forEach(line => {

        let [company, employeeId] = line.split(' -> ');

        if (!companiesObj[company]) {

            companiesObj[company] = new Set();
        }
           
        companiesObj[company].add(employeeId);
        
    });
console.log(companiesObj);
    companyKVP = Object.entries(companiesObj);
    companyKVP.sort((a, b) => a[0].localeCompare(b[0]));
    companyKVP.forEach(kvp => {
        console.log(kvp[0]);
        kvp[1].forEach(el => {
            console.log(`-- ${el}`);
        })

    })
}
CompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
)