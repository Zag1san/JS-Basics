function solve(speed, area) {

    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLImit = 50;
    let residentialLimit = 20;

    switch (area) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            } else {
                let diff = speed - motorwayLimit;

                if (diff <= 20) {
                    let status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);

                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
                }

            }
            break;
        case 'interstate':
            if (speed <= interstateLimit) {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
            } else {
                let diff = speed - interstateLimit;

                if (diff <= 20) {
                    let status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);

                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
                }

            }
            break;
        case 'city':
            if (speed <= cityLImit) {
                console.log(`Driving ${speed} km/h in a ${cityLImit} zone`);
            } else {
                let diff = speed - cityLImit;

                if (diff <= 20) {
                    let status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLImit} - ${status}`);
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLImit} - ${status}`);

                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLImit} - ${status}`);
                }

            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            } else {
                let diff = speed - residentialLimit;

                if (diff <= 20) {
                    let status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
                } else if (diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);

                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
                }

            }
            break;

    }

}
solve(21, 'residential')