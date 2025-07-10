var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
var intersection = [];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            break;
        }
    }
}

console.log(intersection);