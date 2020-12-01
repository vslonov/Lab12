var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./Lab12.html', function (err, html) {

    http.createServer(function(req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    })
app.listen(5000);
});

