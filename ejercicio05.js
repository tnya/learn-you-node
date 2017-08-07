//FILTERED LS

var fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
	var extension;
	var list = [];
	for ( i = 0; i < files.length ; i++){
		extension = files[i].split(".")[1];
		if(extension == process.argv[3]){
			list.push(files[i]);
		}
	}
	console.log(list.join("\n"));
});

/*sol oficial

var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/