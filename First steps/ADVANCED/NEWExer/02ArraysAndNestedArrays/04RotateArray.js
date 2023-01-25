function solve(input, rotations) {

for (let i = 0; i < rotations; i++) {
    let element = input.pop(input[i]);
    input.unshift(element)
    
}
    console.log(input.join(' '));
  
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)