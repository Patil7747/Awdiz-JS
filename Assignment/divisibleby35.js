var arr = [10, 15, 30, 20, 45];
var result = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        result.push(arr[i]);
    }
}

console.log(result);