var arr = [1, 4, 6, 9];
var flag = true;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        flag = false;
        break;
    }
}

console.log(flag);