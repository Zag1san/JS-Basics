function solve(arr) {
let result = [];
    return sorted = arr.sort((a, b) => {
        if(a.length === b.length) {
           return a.localeCompare(b)
        } else {
            return a.length - b.length;
        }
    }).join("\n")
   
    
    
    
}
console.log(
    solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])
);