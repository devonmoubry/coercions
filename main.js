var numbers = [];
var strings = [];
var booleans = [];

var startingValues = [ undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, [], [12], ['something'], function(){} ];
var labels = [ "undefined", "null", "true", "false", '""', '"1.2"', '"one"', '0', '-0', 'NaN', 'Infinity', '-Infinity', '1', '[]', '[12]', '["something"]', 'function(){}' ];
for (var i = 0; i < startingValues.length; i++) {
  numbers.push(Number(startingValues[i]));
  strings.push(String(startingValues[i]));
  booleans.push(Boolean(startingValues[i]));
}

for (var j = 0; j < startingValues.length; j++) {
  var table = document.getElementById('coercion-table');
  var tbody = table.getElementsByTagName('tbody')[0];
  tbody.innerHTML += '<tr><td>' + labels[j] + '</td><td>' + numbers[j] + '</td><td>"' + strings[j] + '"</td><td>' + booleans[j] + '</td></tr>';
}
