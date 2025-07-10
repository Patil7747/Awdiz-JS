var arr = [1, 2, 1, 3, 1, 4];
var element = 1;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        count++;
    }
}

console.log(count);