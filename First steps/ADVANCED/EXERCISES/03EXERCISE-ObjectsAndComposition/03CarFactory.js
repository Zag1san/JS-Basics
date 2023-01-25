function carFactory(orderObj) {
    let carObj = {};

    let enginesObj = {
        small: { power: 90, volume: 1800 },
        medium: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    };
    let carriageObj = {
        hatchback: { type: 'hatchback', color: "" },
        coupe: { type: 'coupe', color: "" }
    };
    carObj['model'] = orderObj.model;
    if (orderObj.power <= 90) {
        carObj.engine = enginesObj.small;
    } else if (orderObj.power > 90 && orderObj.power <= 120) {
        carObj.engine = enginesObj.medium;
    } else {
        carObj.engine = enginesObj.monster;
    };
    if (orderObj.carriage === 'hatchback') {
        carObj.carriage = carriageObj.hatchback;
        carObj.carriage.color = orderObj.color;
    } else if (orderObj.carriage === 'coupe') {
        carObj.carriage = carriageObj.coupe;
        carObj.carriage.color = orderObj.color;
    };

    if (orderObj.wheelsize % 2 === 0) {
        let wheel = orderObj.wheelsize - 1;
        carObj.wheels = [wheel, wheel, wheel, wheel];
    } else {
        let wheel = orderObj.wheelsize;
        carObj.wheels = [wheel, wheel, wheel, wheel];
    }
    return carObj;

}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)
