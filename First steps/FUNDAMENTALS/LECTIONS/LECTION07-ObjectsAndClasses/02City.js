function solve(nameOfCity, areaOfCity, populationOfCity, countryOfCity, postcodeOfCity) {

    let city = {
        name: nameOfCity,
        area: areaOfCity,
        population: populationOfCity,
        country: countryOfCity,
        postCode: postcodeOfCity

    }

    for (const key in city) {

        console.log(`${key} -> ${city[key]}`);

    }

}


console.log(
    solve("Sofia", " 492", "1238438", "Bulgaria", "1000")
);