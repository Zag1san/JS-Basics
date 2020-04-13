function solve(day, age) {

    let ticketPrice = " ";
    let isError = false;
    switch(day) {
        case "Weekday":
            if(age >= 0 && age <= 18) {
                ticketPrice = "12$";
            } else if (age >= 0 && age <=64) {
                ticketPrice = "18$";
            } else if (age >= 0 && age <= 122) {
                ticketPrice = "12$";
            } else {
                isError = true;
            }
            break;
        case "Weekend":
            if(age >= 0 && age <= 18) {
                ticketPrice = "15$";
            } else if (age >= 0 && age <=64) {
                ticketPrice = "20$";
            } else if (age >= 0 && age <= 122) {
                ticketPrice = "15$";
            } else {
                isError = true;
            }
            break;
        case "Holiday":
            if(age >= 0 && age <= 18) {
                ticketPrice = "5$";
            } else if (age >= 0 && age <=64) {
                ticketPrice = "12$";
            } else if (age >= 0 && age <= 122) {
                ticketPrice = "10$";            
            } else {
                isError = true;
            }
            break;
      
    }
    if (!isError) {
        console.log(ticketPrice);
    } else {
        console.log("Error!");
        
    }
    
}
solve('Weekday', 
-12
)