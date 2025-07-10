var str = "apple";
var freq = {};

for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

console.log(freq);