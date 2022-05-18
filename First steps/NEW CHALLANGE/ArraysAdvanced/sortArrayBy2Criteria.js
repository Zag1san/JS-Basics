function sortByTwoCriteria(array) {

    let result = array.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });
    for (const element of result) {
        console.log(element);
    }

}
sortByTwoCriteria(["alpha", "beta", "gamma"])