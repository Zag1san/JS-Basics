function solve(input) {
    let months = Number(input.shift());
    let electricityAll = 0;
    let waterAll = months * 20;
    let internetAll = months * 15;
    let others = 0;
    for (let i = 1; i <= months; i++) {
        let electricity = Number(input.shift());
        electricityAll += electricity;
        others += (electricity + 20 + 15) * 1.20;
    }
    let averagePerMonth = (electricityAll + waterAll + internetAll + others) / months;
    console.log(`Electricity: ${electricityAll.toFixed(2)} lv`);
    console.log(`Water: ${waterAll.toFixed(2)} lv`);
    console.log(`Internet: ${internetAll.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${averagePerMonth.toFixed(2)} lv`);
}
solve([
    '8',      '123.54',
    '231.54', '140.23',
    '100',    '122.4',
    '430',    '178.52',
    '64.2'
  ])