function solve(input) {

    // class TownInfo {

    //     constructor(town, latitude, longitude) {
    //         this.town = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }

    let townsInfo = [];

    for (let i = 0; i < input.length; i++) {
        let [name, lat, lon] = input[i].split(" | ");
        lat = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);
        let currentTownInfo = {};
        currentTownInfo.town = name;
        currentTownInfo.latitude = lat;
        currentTownInfo.longitude = lon;
        townsInfo.push(currentTownInfo);

    }

    for (const info of townsInfo) {
        console.log(info);
    }


}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
