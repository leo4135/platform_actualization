const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);
    response.setHeader('Content-Type', 'text/json; charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    const filePath = request.url.substr(1);
    fs.readFile(filePath, function (error, data) {
        if (error) {
            response.statusCode = 404;
            response.end('Resourse not found!');
        } else {
            response.end(data);
        }
    });
}).listen(3000, function () {
    console.log('Server started at 3000');
});