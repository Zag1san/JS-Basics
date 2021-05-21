function solve(arr) {

   console.log(arr.sort((a, b) => a-b).splice(0, 2).join(" "))
}
 solve([3, 0, 10, 4, 7, 3])