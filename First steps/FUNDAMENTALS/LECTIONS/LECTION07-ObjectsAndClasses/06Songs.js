function solve(input) {

    class Songs {

        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }
    }
    let songsObject = [];
    let songsCnt = input.shift();
    let typeOfList = input.pop();

    for (const songData of input) {

        let [typeList, name, time] = songData.split("_");
        songsObject.push(new Songs(typeList, name, time));
        
    }

    for (const song of songsObject) {
        if(song.typeList === typeOfList) {
            console.log(song.name);
        } else if (typeOfList === 'all'){
            console.log(song.name)
        }
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)
