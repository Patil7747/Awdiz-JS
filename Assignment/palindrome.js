var str = "madam";
var rev = "";

for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}

if (str === rev) {
    console.log(true);
} else {
    console.log(false);
}