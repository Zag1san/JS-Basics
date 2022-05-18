function movies(input) {

    const movies = [];

    input.forEach((element, index) => {

        let tokens = element.split(' ');
        let addIndex = tokens.indexOf('addMovie');
        let directorIndex = tokens.indexOf('directedBy');
        let dateIndex = tokens.indexOf('onDate');
        if (tokens.includes('addMovie')) {
            const movie = {
                name: tokens.slice(addIndex + 1).join(' '),
            }
            movies.push(movie);
        } else if (tokens.includes('directedBy')) {
            let name = tokens.slice(0, directorIndex).join(' ');
            let director = tokens.slice(directorIndex + 1).join(' ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (tokens.includes('onDate')) {
            let name = tokens.slice(0, dateIndex).join(' ');
            let date = tokens.slice(dateIndex + 1).join('');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }

    });

    movies.forEach(movie => {
        if(movie.name !== undefined 
            && movie.director !== undefined 
            && movie.date !== undefined) {
                console.log(JSON.stringify(movie));
        };
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)