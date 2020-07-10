function arrayManipulation(array) {

    let numberedArr = array.shift().split(" ").map(Number)
    
    for (const elements of array) {
        
        let [command, first, second] = elements.split(" ");
        first = Number(first);
        second = Number(second);

        switch (command) {
            case 'Add': 
            numberedArr.push(first);      
            break;
            case 'Remove':  
            numberedArr = numberedArr.filter(x => x !== first);     //.splice(numberedArr.indexOf(first), 1);  
            break;
            case 'RemoveAt': 
            numberedArr.splice(first, 1);     
            break;
            case 'Insert': 
            numberedArr.splice(second, 0, first);      
            break;
        }
    }
    console.log(numberedArr.join(" "));
        

}
arrayManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)