function countPrimeNumbers(){
    for(var counter=2; counter <= 100; counter++){
        var prime = true;
        for (let j=2; j < counter; j++){
            if (counter % j == 0) {
                prime = false;
            }
        }
        if (prime == true){
            console.log(counter);
       }
    }
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);