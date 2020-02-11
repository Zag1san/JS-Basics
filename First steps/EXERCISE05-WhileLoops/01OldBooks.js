function solve(input) {

    let book = input.shift();
    let libraryCapacity = +input.shift();
    let booksCheked = 0;
    let currentBook = input.shift();
    let isFound = true;

    while (currentBook !== book) {
        booksCheked++;
        if (booksCheked >= libraryCapacity) {
           isFound = false;
            break;
        }
        
        currentBook = input.shift();
    }
   if (!isFound) {
    console.log("The book you search is not here!");
    console.log(`You checked ${booksCheked} books.`);
   } else {
    console.log(`You checked ${booksCheked} books and found it.`);
   }
   
}
solve([
    'Bourne',     '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship',  'Strongest',
    'Profit',     'Tripple',
    'Stella',     'The Matrix',
    'Bourne'
  ])