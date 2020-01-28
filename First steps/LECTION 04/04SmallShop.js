function solve(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());
    let totalPrice = 0;
    if (product === "coffee") {
        if (city === "Sofia") {
            totalPrice = quantity * 0.50;
        } else if (city === "Plovdiv") {
            totalPrice = quantity * 0.40;
        } else {
            totalPrice = quantity * 0.45;
        }
    } else if (product === "water") {
        if (city === "Sofia") {
            totalPrice = quantity * 0.80;
        } else if (city === "Plovdiv") {
            totalPrice = quantity * 0.70;
        } else {
            totalPrice = quantity * 0.70;
        }
    } else if (product === "beer") {
        if (city === "Sofia") {
            totalPrice = quantity * 1.20;
        } else if (city === "Plovdiv") {
            totalPrice = quantity * 1.15;
        } else {
            totalPrice = quantity * 1.10;
        }
    } else if (product === "sweets") {
        if (city === "Sofia") {
            totalPrice = quantity * 1.45;
        } else if (city === "Plovdiv") {
            totalPrice = quantity * 1.30;
        } else {
            totalPrice = quantity * 1.35;
        }
    } else {
        if (city === "Sofia") {
            totalPrice = quantity * 1.60;
        } else if (city === "Plovdiv") {
            totalPrice = quantity * 1.50;
        } else {
            totalPrice = quantity * 1.55;
        }
    }
    console.log(totalPrice)
}
solve(["coffee", "Varna", "2"])