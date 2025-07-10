var arr = [12, 15, 22];
var flag = true;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) {
        flag = false;
        break;
    }
}

console.log(flag);