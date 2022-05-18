function towns(input) {

    // class Town {

    //     constructor(name, latitude, longitude) {
    //         this.town = name;
    //         this.latitude = latitude,
    //         this.longitude = longitude;

    //     }
    // }

    let townsArray = [];

    input.forEach(el => {
        let [town, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        townsArray.push({
            town,
            latitude,
            longitude,
        });
    });

    for (const town of townsArray) {
        console.log(town);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);