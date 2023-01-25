function townPopulation(towns) {

    const townsPopulation = {};

    for (let i = 0; i < towns.length; i++) {
        let currentInfo = towns[i];
        let [town, population] = currentInfo.split(' <-> ');
        population = Number(population);
        if (townsPopulation[town]) {
            townsPopulation[town] += population;
        } else {
            townsPopulation[town] = population;
        }

    }

    let townsPopulationEntries = Object.entries(townsPopulation);

    for (const kvp of townsPopulationEntries) {
        console.log(`${kvp[0]} : ${kvp[1]}`);
    }


}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);     