function solve(input){
    let skumriaPrice = Number(input.shift());
    let cacaPrice = Number(input.shift());
    let palamudKg = Number(input.shift());
    let safridKg = Number(input.shift());
    let midiKg = Number(input.shift());
    let palamudPrice = skumriaPrice + (skumriaPrice * 60 / 100);
    let safridPrice = cacaPrice + (cacaPrice * 80 /100);
    let midiPrice = 7.5;
    let totalPalamudPrice = palamudPrice * palamudKg;
    let totalSafridPrice = safridPrice * safridKg;
    let totalMidiPrice = midiPrice * midiKg;
    let totalPrice = totalMidiPrice + totalPalamudPrice + totalSafridPrice;
    console.log(totalPrice.toFixed(2))
}
solve([ "5.55", "3.57", "4.3", "3.6", "7" ])