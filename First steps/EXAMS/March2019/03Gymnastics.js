function solve(input) {

    let nation = input.shift();
    let discipline = input.shift();
    let ribbonScore = 0;
    let hoopScore = 0;
    let ropeScore = 0;
    let percentageToMaxScore = 0;
    let maxScore = 20;

    switch (nation) {
        case "Russia":
            switch (discipline) {
                case "ribbon":
                    ribbonScore = 9.100 + 9.400;
                    percentageToMaxScore = ((maxScore - ribbonScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ribbonScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "hoop":
                    hoopScore = 9.300 + 9.800;
                    percentageToMaxScore = ((maxScore - hoopScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${hoopScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "rope":
                    ropeScore = 9.600 + 9.000;
                    percentageToMaxScore = ((maxScore - ropeScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ropeScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
            }
            break;
        case "Bulgaria":
            switch (discipline) {
                case "ribbon":
                    ribbonScore = 9.600 + 9.400;
                    percentageToMaxScore = ((maxScore - ribbonScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ribbonScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "hoop":
                    hoopScore = 9.550 + 9.750;
                    percentageToMaxScore = ((maxScore - hoopScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${hoopScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "rope":
                    ropeScore = 9.500 + 9.400;
                    percentageToMaxScore = ((maxScore - ropeScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ropeScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
            }
            break;
        case "Italy":
            switch (discipline) {
                case "ribbon":
                    ribbonScore = 9.200 + 9.500;
                    percentageToMaxScore = ((maxScore - ribbonScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ribbonScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "hoop":
                    hoopScore = 9.450 + 9.350;
                    percentageToMaxScore = ((maxScore - hoopScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${hoopScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
                case "rope":
                    ropeScore = 9.700 + 9.150;
                    percentageToMaxScore = ((maxScore - ropeScore) / maxScore) * 100;
                    console.log(`The team of ${nation} get ${ropeScore.toFixed(3)} on ${discipline}.`);
                    console.log(`${percentageToMaxScore.toFixed(2)}%`);
                    break;
            }
            break;
    }
}
solve(['Bulgaria', 'ribbon', ''])