function solve(dayNumber) {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (dayNumber < 0 || dayNumber > days.length) {
        console.log('Invalid day!');
        
    } else {
        console.log(days[dayNumber - 1]);
        
    }
}
solve(3)