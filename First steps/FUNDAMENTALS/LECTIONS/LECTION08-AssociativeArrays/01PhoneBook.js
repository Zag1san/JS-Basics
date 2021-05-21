function solve(input) {

    let contacts = {};
    
    for(let i = 0; i < input.length; i++) {
        let [name, phone] = input[i].split(" ");
        contacts[name] = phone;
    }
   
    Object.keys(contacts).forEach(key => {
        
        console.log(`${key} -> ${contacts[key]}`);
        
    })
    
}
 solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
 )