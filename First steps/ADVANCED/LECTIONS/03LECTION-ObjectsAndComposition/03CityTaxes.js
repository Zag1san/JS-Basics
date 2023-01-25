function cityTaxes() {

    const city = {
        name: 'Sofia',
        population: 2000000,
        treasury: 1000000,
        taxRate: 10,
        collectTaxes: function() {
           this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent) {
            this.population -= Math.floor(this.population * (percent / 100));
        },

    };
   
    
   return city;
};

const city = cityTaxes();
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

console.log(city);

