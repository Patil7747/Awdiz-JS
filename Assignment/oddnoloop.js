//Q4. Check even or odd using map (without map — using for loop)
var arr = [1, 2, 3, 4];
var result = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result.push("even");
    } else {
        result.push("odd");
    }
}

console.log(result);