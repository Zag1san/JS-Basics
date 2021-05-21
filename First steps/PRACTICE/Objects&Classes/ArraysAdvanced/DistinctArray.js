function solve(array) {

    
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let indexOfElement = i;
        for (let j = i+1; j < array.length; j++) {
            nextEl = array[j];
            indexOfElement++;
            if (currentElement === nextEl) {
                array.splice(indexOfElement, 1);

            }

        }

    }
    console.log(array.join(" "));

}
solve([1, 2, 3, 4]
)
