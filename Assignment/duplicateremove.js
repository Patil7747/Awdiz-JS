var arr = [1, 2, 2, 3, 4, 1];
var unique = [];

for (var i = 0; i < arr.length; i++) {
    var found = false;
    for (var j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        unique.push(arr[i]);
    }
}

console.log(unique);