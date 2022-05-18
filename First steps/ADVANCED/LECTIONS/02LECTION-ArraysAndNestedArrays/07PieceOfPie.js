function solve(pieFlavours, first, second) {

    let result = [];
    let startIndex = pieFlavours.indexOf(first);
    let endIndex = pieFlavours.indexOf(second);

    result = pieFlavours.slice(startIndex, endIndex + 1);

    return result;
}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)