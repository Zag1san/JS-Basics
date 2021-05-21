function solve(string) {

    let firstHalf = string.substring(0, string.length / 2);
    let secondHalf = string.substring(string.length / 2);
    let firstArr = [];
    let secondArr = [];
    for (const letter of firstHalf) {
        firstArr.unshift(letter);
    }
    for (const letter of secondHalf) {
        secondArr.unshift(letter);
    }
    console.log(firstArr.join(""));
    console.log(secondArr.join(""));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')