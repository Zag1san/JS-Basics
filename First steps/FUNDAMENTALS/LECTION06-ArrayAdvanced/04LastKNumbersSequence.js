function solve(n, k) {

    let result = [1]

    for (let i = 1; i < n; i++) {
        let initialIndex = Math.max(result.length - k, 0);
        let nextElement = 0

        for (let j = initialIndex; j < result.length; j++) {
            nextElement += result[j]

        }

        result.push(nextElement)
    }

    console.log(result.join(" "));



}
solve(6, 3)