function solve(text) {

    text.split(' ')
        .filter((word) => word.startsWith('#') && word.length > 1)
        .filter((word) => {
            return word.split('')
                       .slice(1)
                       .every((x) => isLower(x) || isUpper(x))
        })
        .map((word => word.substring(1)))
        .forEach(word =>
            console.log(word))

    function isLower(char) {
        let ascii = char.charCodeAt(0);
        return ascii >= 97 && ascii <= 122;
    }
    function isUpper(char) {
        let ascii = char.charCodeAt(0);
        return ascii >= 65 && ascii <= 90;
    }

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
