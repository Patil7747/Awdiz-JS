var n = 15;
var fib = [0, 1];

for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);