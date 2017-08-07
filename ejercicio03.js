// MY FIRST I/O

var fs = require('fs');
var filename = process.argv[2];
file = fs.readFileSync(filename);
dato = file.toString().split('\n').length - 1;
console.log(dato);