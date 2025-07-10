var primes = [];

for (var num = 10; num <= 50; num++) {
    var isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    for (var i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(num);
    }
}

console.log(primes);