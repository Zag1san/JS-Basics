function triangleProblem(num) {

    for (let row = 1; row <= num; row++) {
        let number = "";
        for (let i = 1; i <= row; i++) {

            number += `${row} `;

        }
        console.log(number);

    }

}
triangleProblem(3)