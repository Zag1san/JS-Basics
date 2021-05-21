function solve(input) {

    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let addIndex = tokens.indexOf("addMovie"); 
        let directorIndex = tokens.indexOf("directedBy")
        let dateIndex = tokens.indexOf("onDate")
        
            if(addIndex > -1) {
                let name = tokens.slice(addIndex + 1).join(" ");
                movies.push({name: name});
            }
            if(directorIndex > -1) {
                let name = tokens.slice(0, directorIndex).join(" ");
                let director = tokens.slice(directorIndex + 1).join(" ");
                
                movies.forEach(movie => {
                    if(movie.name === name) {
                        movie.director = director;
                    }
                });
            
            }
            if(dateIndex > -1) {
                let date = tokens.slice(dateIndex + 1).join(" ");
                let name = tokens.slice(0, dateIndex).join(" ");
                movies.forEach(movie => {
                    if(movie.name === name) {
                        movie.date = date;
                    }
                })
            }

                
    }
        movies.forEach(movie => {
            if(movie.name!== undefined && movie.director!== undefined && movie.date!== undefined){
                console.log(JSON.stringify(movie));
                }
        })   
        
    
   
}
solve([
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