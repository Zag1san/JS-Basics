function solve(input) {

    let destination = input.shift();
    let date = input.shift();
    let nights = Number(input.shift());
    let price = 0;

    switch (destination) {
        case "France":
            switch (date) {
                case "21-23":
                    price += 30 * nights;
                    break;
                case "24-27":
                    price += 35 * nights;
                    break;
                case "28-31":
                    price += 40 * nights;
                    break;
            }
            break;
        case "Italy": switch (date) {
            case "21-23":
                price += 28 * nights;
                break;
            case "24-27":
                price += 32 * nights;
                break;
            case "28-31":
                price += 39 * nights;
                break;
        }
            break;
        case "Germany": switch (date) {
            case "21-23":
                price += 32 * nights;
                break;
            case "24-27":
                price += 37 * nights;
                break;
            case "28-31":
                price += 43 * nights;
                break;
        }
            break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}
solve([ 'Germany', '24-27', '5', '', '' ])