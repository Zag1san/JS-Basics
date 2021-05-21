function solve(input) {

    let heroes = [];

    input.forEach(line => {
        let currentHero = {};
        let tokens = line.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(", ").sort((a, b) => a.localeCompare(b));;
        currentHero.hero = name;
        currentHero.level = level;
        currentHero.items = items;
        heroes.push(currentHero);
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero =>{
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    })


}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)
