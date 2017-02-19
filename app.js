var express = require('express');
var app = express();

app.use(express.static('BE_2'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
