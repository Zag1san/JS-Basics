function solve(input) {

    let inpArr = input.split(" ");
    
    function isValid(str){
        
        for(let i=0;i<str.length;i++){
           
            if((str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) && (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90)){
                return false;
            }
        }
        return true;
    }
    inpArr.forEach(word => {
        if(word.startsWith("#") && word.length > 1 && isValid(word.slice(1))) {

            word = word.replace(word[0], "");
            console.log(word);

        }
    });


}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')