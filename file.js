var fs = require("fs");

// Asynchronous read

fs.readFile('data.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log( data.toString());
});

console.log("Starting ghi file 1");
var path = "sample1.txt";


fs.writeFile('message.txt', data.txt, function (err) {
  if (err) throw err;
  console.log('Done!');
});
console.log('Bye');
