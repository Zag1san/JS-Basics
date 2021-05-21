function solve(input) {

    let guestList = [];
    let guest = input.shift()
    
    while (guest !== 'PARTY') {
        guestList.push(guest);

        guest = input.shift();
    }
    
    let filteredList = guestList.filter(guest => {
         
        
       
    })
       


console.log(filteredList);
console.log(input);
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)