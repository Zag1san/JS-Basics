function solve(name, population, treasure) {

    const city = {
        // name: name,
        // population: population,
        // treasury: treasure

    };
    
    city.name = name;
    city.population = population;
    city.treasury = treasure;

    // city['name'] = name;
    // city['population'] = population;
    // city['treasury'] = treasure;


    return city;
}
console.log(solve(
    'Tortuga',
    7000,
    15000
));