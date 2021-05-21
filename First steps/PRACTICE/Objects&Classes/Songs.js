function solve(input) {

    class Song {
        constructor(typeList, name, time) {

            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
            

    }
    
    let numerOfSongs = input.shift();
    let typeOfPlaylist = input.pop();
    let playlist = [];

    for (let i = 0; i < numerOfSongs; i++) {
        let [typeList, name, time] = input[i].split('_');

        let currentSong = new Song(typeList, name, time) 
        
        playlist.push(currentSong);
        if(typeList === typeOfPlaylist || typeOfPlaylist === 'all') {
            console.log(name);
            

        }
    }
                           // OTHER SOLUTION
    // class Song {

    //     constructor(typeList, name, time) {
    //         this.type = typeList;
    //         this.name = name;
    //         this.time = time;

    //     }
    // }

    // let songsArr = [];
    // let numberOfSongs = input.shift();
    // let typeOfList = input[input.length - 1];

    // for (let i = 0; i < numberOfSongs; i++) {
    //     let [type, name, time] = input[i].split("_");
    //     let currentSong = new Song(type, name, time);
    //     songsArr.push(currentSong)

    // }

    // if (typeOfList === "all") {
    //     songsArr.forEach(x => console.log(x.name));
    // } else {
    //     let filteredSongs = songsArr.filter(x => x.type === typeOfList);
    //     filteredSongs.forEach(x => console.log(x.name));
    // }
    
}
 solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )
