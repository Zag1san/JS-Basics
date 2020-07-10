function grades(grade) {

    if(grade < 3 && grade >= 2) {
        return "Fail";
    } else if(grade >= 3 && grade < 3.5) {
        return "Poor";
    } else if(grade >= 3.5 && grade < 4.5) {
        return "Good";
    } else if (grade >= 4.5 && grade < 5.5) {
        return "Very good";
    } else if(grade >= 5.5 && grade <= 6) {
        return "Excellent";
    }
    
}
 let grade = grades(3.33);
 console.log(grade);
 