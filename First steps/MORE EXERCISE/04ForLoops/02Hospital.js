function solve(input) {
    let period = Number(input.shift());
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let medics = 7;
    for (let i = 1; i <= period; i++) {
        let patientsPerDay = Number(input.shift());
        if(i % 3 === 0 && untreatedPatients > treatedPatients) {
            medics += 1;
        }
        if(medics >= patientsPerDay) {
            treatedPatients += patientsPerDay;
        } else {
            treatedPatients += medics;
            untreatedPatients += patientsPerDay - medics;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`)
}
solve([ '3', '7', '7', '7' ])