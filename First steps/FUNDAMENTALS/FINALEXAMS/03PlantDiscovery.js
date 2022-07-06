function solve(input) {

    let numberOfPlants = Number(input[0]);
    let plantsObj = {};
    input.slice(1, numberOfPlants + 1).forEach(line => {
        let [plant, rarity] = line.split('<->');
        plantsObj[plant] = {Rarity: Number(rarity), Rating: [] };

    });;
    let commands = input.slice((numberOfPlants + 1));

    for (const line of commands) {
        let [command, rest] = line.split(': ');
        if (command === 'Exhibition') {
            break;
        };
        switch (command) {   
            case 'Rate':
                let [plant1, rating] = rest.split(' - ');   
                if(plantsObj[plant1]) {
                    rating = Number(rating)
                    plantsObj[plant1].Rating.push(rating);
                } else {
                    console.log('error');
                }
                break;
            case 'Update':
                let [plant2, rarity] =  rest.split(' - ');   
                if(plantsObj[plant2]) {
                    plantsObj[plant2].Rarity = rarity;
                } else {
                    console.log('error');
                }

                break;
            case 'Reset':
                if(plantsObj[rest]) {
                    plantsObj[rest].Rating = [];
                } else {
                    console.log('error');
                }
                break;
        }

    }
  
    let plantsArray = Object.entries(plantsObj);
    console.log(`Plants for the exhibition:`);
    for (const kvp of plantsArray) {
       let plantKVP = Object.entries(kvp[1]);
       let sum = 0;
       let divider = plantKVP[1][1].length;
       for (const num of plantKVP[1][1]) {
           sum += num;
       }
       if(sum !== 0) {
           sum /= plantKVP[1][1].length
       }
       console.log(`- ${kvp[0]}; ${plantKVP[0][0]}: ${plantKVP[0][1]}; ${plantKVP[1][0]}: ${sum.toFixed(2)}`);
    }

}
solve(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])