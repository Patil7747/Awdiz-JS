var names = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
var result = [];

for (var i = 0; i < names.length; i++) {
    var firstChar = names[i][0].toLowerCase();
    if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
        result.push(names[i]);
    }
}

console.log(result);