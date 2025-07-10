//Q5. Flatten a nested array (1 level deep)
var arr = [1, 2, [3, 4], 5];
var flat = [];

for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (var j = 0; j < arr[i].length; j++) {
            flat.push(arr[i][j]);
        }
    } else {
        flat.push(arr[i]);
    }
}

console.log(flat);