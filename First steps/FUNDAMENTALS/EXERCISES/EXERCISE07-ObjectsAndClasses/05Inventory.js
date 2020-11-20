function solve(input) {

    const heroes = [];

    input.forEach(element => {
        const [heroName, heroLevel, items] = element.split(" / ");
        const currentHero = {};
        currentHero.heroName = heroName;
        currentHero.heroLevel = Number(heroLevel);
        currentHero.items = items.split(", ").sort((a, b) => a.localeCompare(b));
        
        heroes.push(currentHero)
    });
  
    heroes.sort((a,b) => a.heroLevel - b.heroLevel);
    
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items.join(", ")}`);
        
    })  

}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)