//Q3. Reverse only words in an array of strings
var arr = ["hello", "world"];
var result = [];

for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var rev = "";
    for (var j = word.length - 1; j >= 0; j--) {
        rev += word[j];
    }
    result.push(rev);
}

console.log(result);