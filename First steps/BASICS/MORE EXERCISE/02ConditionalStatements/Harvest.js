function solve(input) {
    let field = Number(input.shift());
    let kgGrapesPerMeter = Number(input.shift());
    let litersWineNeeded = Number(input.shift());
    let workers = Number(input.shift());
    let fieldForWine = field * 0.40;
    let totalGrapesKg = fieldForWine * kgGrapesPerMeter;
    let totalLitersWine = totalGrapesKg / 2.5;
    if (litersWineNeeded > totalLitersWine) {
        let wineLacking = litersWineNeeded - totalLitersWine;
        console.log(`It will be a tough winter! More ${Math.floor(wineLacking)} liters wine needed.`);
    } else if (litersWineNeeded <= totalLitersWine) {
        let wineMore = totalLitersWine - litersWineNeeded;
        let giftedWinePerWorker = wineMore / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalLitersWine)} liters.`);
        console.log(`${Math.ceil(wineMore)} liters left -> ${Math.ceil(giftedWinePerWorker)} liters per person.`);
    }

}
solve(["650", "2", "175", "3"])