function calorieObject(array) {

    const listObj = {};

    for (let i = 0; i < array.length; i +=2 ) {
        let product = array[i];
        let calories = array[i+1];
        listObj[product] =  Number(calories);
    };
    console.log(listObj);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
