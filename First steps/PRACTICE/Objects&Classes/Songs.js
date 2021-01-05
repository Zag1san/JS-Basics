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
      
    
}
 solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )
