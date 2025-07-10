var arr = [2, 5, 8, 9];
var flag = true;

for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        flag = false;
        break;
    }
}

console.log(flag);