function solve(input) {

    let stage = input.shift();
    let ticketType = input.shift();
    let ticketCnt = +input.shift();
    let picture = input.shift();
    let ticketsPrice = 0;
    let priceWithPicture = ticketCnt * 40;
    switch (ticketType) {
        case "Standard":
            switch (stage) {
                case "Quarter final":
                    ticketsPrice = 55.50; break;
                case "Semi final":
                    ticketsPrice = 75.88; break;
                case "Final":
                    ticketsPrice = 110.10; break;
            }
            break;
        case "Premium":
            switch (stage) {
                case "Quarter final":
                    ticketsPrice = 105.20; break;
                case "Semi final":
                    ticketsPrice = 125.22; break;
                case "Final":
                    ticketsPrice = 160.66; break;
            }
            break;
        case "VIP":
            switch (stage) {
                case "Quarter final":
                    ticketsPrice = 118.90; break;
                case "Semi final":
                    ticketsPrice = 300.40; break;
                case "Final":
                    ticketsPrice = 400; break;
            }
            break;

    }
    let allTicketPrice = ticketCnt * ticketsPrice;
    if (allTicketPrice > 4000) {
        allTicketPrice *= 0.75;
    } else if (allTicketPrice > 2500 && picture === "Y") {
        allTicketPrice = allTicketPrice * 0.90 + priceWithPicture;
    } else if (allTicketPrice > 2500 && picture === "N") {
        allTicketPrice *= 0.90;
    } else if (allTicketPrice <= 2500 && picture === "Y") {
        allTicketPrice += priceWithPicture;
    }
    console.log(allTicketPrice.toFixed(2));
}
solve([ 'Semi final', 'VIP', '9', 'Y' ])