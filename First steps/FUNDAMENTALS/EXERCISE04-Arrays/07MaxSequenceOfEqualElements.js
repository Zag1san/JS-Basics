function solve(arr) {

  let longestElement = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let currentLongest = [element]

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];

      if (element === nextElement) {
        currentLongest.push(nextElement);
        index = i;
      } else {
        break;
      }

    }
    if (currentLongest.length > longestElement.length) {
      longestElement = currentLongest;
    }
  }
  console.log(longestElement.join(" "));

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])