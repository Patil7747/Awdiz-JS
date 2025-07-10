var word = "coding";
var charMap = {};
var flag = false;

for (var i = 0; i < word.length; i++) {
    var ch = word[i];
    if (charMap[ch]) {
        flag = true;
        break;
    } else {
        charMap[ch] = 1;
    }
}

console.log(flag);