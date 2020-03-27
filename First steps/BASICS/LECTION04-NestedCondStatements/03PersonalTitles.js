function solve(input) {
    let age = Number(input.shift());
    let gender = input.shift();
     if (gender === "m") {
         if (age >= 16) {
             console.log("Mr.");
         } else {
             console.log("Master");
         }
     } else if (gender = "f") {
         if (age >= 16) {
             console.log("Ms.");
         } else {
             console.log("Miss")
         }
     }
}
solve(["13.5", "m"])