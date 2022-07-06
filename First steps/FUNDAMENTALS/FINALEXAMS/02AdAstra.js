function solve(input) {

    let text = input.shift();
    let pattern = /([#|])(?<Item>[A-Z a-z]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)\1/g;
    let match = pattern.exec(text);
    let totalCalories = 0;
    let result = [];
    while(match){
        let currentItemCalories = Number(match.groups.calories);
        totalCalories += currentItemCalories;
        result.push(`Item: ${match.groups.Item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
       // result.push({Item: match.groups.Item, 'Best before': match.groups.date, Nutrition: match.groups.calories})
        match = pattern.exec(text);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`);
    for (const line of result) {  
        console.log(line);
    }

}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)