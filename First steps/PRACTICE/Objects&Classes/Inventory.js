function solve(input) {

    let heroes = []
    input.forEach(element => {
        let level = 0;
        let [name, level, items] = element.split(" / ");
        let sortedItems = items.split(" , ").sort().join(" ");
        
        heroes.push({heroName: name, heroLevel: Number(level), items: sortedItems});
        
    });




console.log(heroes);



}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)
