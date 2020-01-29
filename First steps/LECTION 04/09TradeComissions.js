function solve(input) {
    let city = input.shift();
    let sells = Number(input.shift());
    let comission = 0;
    let isError = false;
    if (sells >= 0 && sells <= 500) {
        switch (city) {
            case "Sofia":
                comission = sells * 0.05; break;
            case "Varna":
                comission = sells * 0.045; break;
            case "Plovdiv":
                comission = sells * 0.055; break;
            default:
                isError = true; break;
        }
    } else if (sells > 500 && sells <= 1000) {
        switch (city) {
            case "Sofia":
                comission = sells * 0.07; break;
            case "Varna":
                comission = sells * 0.075; break;
            case "Plovdiv":
                comission = sells * 0.08; break;
            default:
                isError = true; break;
        }
    } else if (sells > 1000 && sells <= 10000) {
        switch (city) {
            case "Sofia":
                comission = sells * 0.08; break;
            case "Varna":
                comission = sells * 0.10; break;
            case "Plovdiv":
                comission = sells * 0.12; break;
            default:
                isError = true; break;
        }
    } else if (sells > 10000) {
        switch (city) {
            case "Sofia":
                comission = sells * 0.12; break;
            case "Varna":
                comission = sells * 0.13; break;
            case "Plovdiv":
                comission = sells * 0.145; break;
            default:
                isError = true; break;
        }
    } else {
        isError = true;
    }
    if (!isError) {
        console.log(comission.toFixed(2));
    } else {
        console.log("error")
    }

}
solve(["Sofia", "1500"])