function isPrime(num){
    if(num < 2) return false;
    
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num % i ==0) return false
    }
    return true
}

function nthPrime(n){
    let count =0;
    let num =2;

    while(true){
        if(isPrime(num)){
            count ++;
            if(count ===n) return num
        }
        num ++
    }
}
console.log(nthPrime(5))