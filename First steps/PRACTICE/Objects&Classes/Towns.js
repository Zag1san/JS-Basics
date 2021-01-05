function solve(input) {


    for (let i = 0; i < input.length; i++) {
        
        let [town, latitude, longitude] = input[i].split(" | ");
        let currentTown ={};
        currentTown.town = town;
        currentTown.latitude = Number(latitude).toFixed(2);
        currentTown.longitude =  Number(longitude).toFixed(2);
        console.log(currentTown);
        
    }

    
}
 solve(['Sofia | 42.696552 | 23.32601',
 'Beijing | 39.913818 | 116.363625']
 )
