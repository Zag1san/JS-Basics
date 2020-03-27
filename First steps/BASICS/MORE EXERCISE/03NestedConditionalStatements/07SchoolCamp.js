function solve(input) {
    let season = input.shift();
    let groupType = input.shift();
    let studentsCnt = Number(input.shift());
    let nightsCnt = Number(input.shift());
    let sport = "";
    let price = 0;
    switch (season) {
        case "Winter":
            if (groupType === "boys" || groupType === "girls") {
                price = nightsCnt * studentsCnt * 9.60;
                if (groupType === "boys") {
                    sport = "Judo";
                } else {
                    sport = "Gymnastics"
                }
            } else {
                price = nightsCnt * studentsCnt * 10;
                sport = "Ski";
            }
            break;
        case "Spring":
            if (groupType === "boys" || groupType === "girls") {
                price = nightsCnt * studentsCnt * 7.20;
                if (groupType === "boys") {
                    sport = "Tennis";
                } else {
                    sport = "Athletics"
                }
            } else {
                price = nightsCnt * studentsCnt * 9.50;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (groupType === "boys" || groupType === "girls") {
                price = nightsCnt * studentsCnt * 15;
                if (groupType === "boys") {
                    sport = "Football";
                } else {
                    sport = "Volleyball"
                }
                break;
            } else {
                price = nightsCnt * studentsCnt * 20;
                sport = "Swimming"
            }
    }
    if (studentsCnt >= 50) {
        price = price * 0.50;
    } else if (studentsCnt >= 20 && studentsCnt < 50) {
        price = price * 0.85;
    } else if (studentsCnt >= 10 && studentsCnt < 20) {
        price = price * 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
solve([ 'Winter', 'mixed', '9', '15' ])