function solve(input) {

    let result = [];
    for (let i = 0; i < input.length; i++) {
            let currentCommand = input[i];
            if(currentCommand === 'add') {
                result.push(i + 1);
            } else if(currentCommand === 'remove') {
                result.pop()
            }
        
    }
    if(result.length > 0){
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
    
  
}
solve(['remove', 
'remove', 
'remove']

)