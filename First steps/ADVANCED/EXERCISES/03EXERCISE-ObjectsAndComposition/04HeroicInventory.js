function heroicInventory(array) {
    let heroesList = [];
    array.forEach(hero => {
        let heroObj = {};
        let inventory = [];
        let [name, level, items] = hero.split(' / ');
        if (items !== undefined) {
            inventory = items.split(', ');
        };
        heroObj.name = name;
        heroObj.level = Number(level);
        heroObj.items = inventory;
        heroesList.push(heroObj);
    });
    let jsonList = JSON.stringify(heroesList);
    return jsonList   
};
// function heroicInventory(arr) {
//     let res = []
//     arr.map((x) => {
//         let [name, level, items] = x.split(' / ')
//         res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
//     })
//     console.log(JSON.stringify(res))
// }
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
