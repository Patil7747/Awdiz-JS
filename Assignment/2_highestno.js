//Q1. Find the second highest number in an array without sorting it 
var arr = [10, 5, 20, 8, 15];
var first = -Infinity;
var second = -Infinity;

for (var i = 0; i < arr.length; i++) 
    {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
        second = arr[i];
    }
}

console.log("Second highest number is: " + second);