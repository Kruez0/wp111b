//Write a prime number program with isPrime(n)

function isPrime(x){
    if(x===0||x===1){
        return console.log(x," is not a prime number!")}
    for(var i=2;i<x;i++){
    if(x%i===0){
        return console.log(x," is not a prime number!");
    }}
 return console.log(x, " is a prime number!");
 }
//Change the number below
isPrime(0)
isPrime(1)
isPrime(2)
isPrime(3)
isPrime(4)
isPrime(5)
isPrime(6)
isPrime(7)
//change the number above

