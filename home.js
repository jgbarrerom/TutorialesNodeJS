var http = require("http"),
  fs = require("fs");
const hostname = '127.0.0.1';
const port = '8080';
//leer archivs con file system
//var html = fs.readFileSync("./index.html");



http.createServer((req,res) => {
  console.log(req.url);
  var html = fs.readFile("./index.html",(err,html) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(html);
    res.end();
  });

}).listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
