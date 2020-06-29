function loadingBar(number) {
   
    function showLoadingBar(n) {
        
        let timesRepeatempty = 10 - (n / 10);
        let timesrepeatPrc = n / 10;
        
        let loadingBar = `${n}% [${'%'.repeat(timesrepeatPrc)}${'.'.repeat(timesRepeatempty)}]`;
        return loadingBar;
    } 
    
    if(number === 100) {
        console.log(`${number}% Complete`);
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(showLoadingBar(number));
        console.log('Still loading...');
        
    }

}
loadingBar(30)