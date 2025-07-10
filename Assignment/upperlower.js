var str = "HelloWorld";
var hasUpper = false;
var hasLower = false;

for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        hasUpper = true;
    } else if (str[i] >= 'a' && str[i] <= 'z') {
        hasLower = true;
    }
}

if (hasUpper && hasLower) {
    console.log(true);
} else {
    console.log(false);
}