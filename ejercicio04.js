//MY FIRST ASYNC I/O

var fs = require('fs');
var filename = process.argv[2];

file = fs.readFile(filename, function(error, data){
	console.log(data.toString().split('\n').length - 1);
});

/* sol. oficial
var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) también se puede utilizar
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })


*/