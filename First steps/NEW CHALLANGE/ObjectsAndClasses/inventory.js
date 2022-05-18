function inventory(input) {

    let heroesInfo = [];
    
    input.forEach(line => {
        let [heroName, heroLevel, items] = line.split(' / ');
        items = items.split(', ').sort((a,b) => a.localeCompare(b));
        let hero = {
            heroName: heroName,
            level: Number(heroLevel),
            items: items.join(', ')
        }
        heroesInfo.push(hero);
    });
   
        heroesInfo.sort((a,b) => a.level - b.level);

        for (const hero of heroesInfo) {
            console.log(`Hero: ${hero.heroName}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )