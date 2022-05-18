function addAndSubstract(first, second, substr) {


    function sum(firstnumber, secondnumber) {

        let summary = firstnumber + secondnumber;

        return summary;

    }

    let result = sum(first, second) - substr;

    return result;


}

addAndSubstract(23,
    6,
    10
)