function solve(input) {
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());
    let totalPrice = 0;
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
        || day === "Friday") {
        switch (fruit) {
            case "banana":
                totalPrice = quantity * 2.50;
                console.log(totalPrice.toFixed(2)); break;
            case "apple":
                totalPrice = quantity * 1.20;
                console.log(totalPrice.toFixed(2)); break;
            case "orange":
                totalPrice = quantity * 0.85;
                console.log(totalPrice.toFixed(2)); break;
            case "grapefruit":
                totalPrice = quantity * 1.45;
                console.log(totalPrice.toFixed(2)); break;
            case "kiwi":
                totalPrice = quantity * 2.70;
                console.log(totalPrice.toFixed(2)); break;
            case "pineapple":
                totalPrice = quantity * 5.50;
                console.log(totalPrice.toFixed(2)); break;
            case "grapes":
                totalPrice = quantity * 3.85;
                console.log(totalPrice.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana":
                totalPrice = quantity * 2.70;
                console.log(totalPrice.toFixed(2)); break;
            case "apple":
                totalPrice = quantity * 1.25;
                console.log(totalPrice.toFixed(2)); break;
            case "orange":
                totalPrice = quantity * 0.90;
                console.log(totalPrice.toFixed(2)); break;
            case "grapefruit":
                totalPrice = quantity * 1.60;
                console.log(totalPrice.toFixed(2)); break;
            case "kiwi":
                totalPrice = quantity * 3.00;
                console.log(totalPrice.toFixed(2)); break;
            case "pineapple":
                totalPrice = quantity * 5.60;
                console.log(totalPrice.toFixed(2)); break;
            case "grapes":
                totalPrice = quantity * 4.20;
                console.log(totalPrice.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else {
        console.log("error")
    }
}
solve(["tomato", "Monday", "0.5"])