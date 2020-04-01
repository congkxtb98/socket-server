var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ip = require("ip")
var PORT = 3000
//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'public')));

//Tạo router
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

//Tạo socket 
io.on('connection', function (socket) {
    console.log('Co 1 tin hieu conet vao client ');

    socket.on('espSend', function (data) {
        io.sockets.emit('severSendDataFromEspToClient', data);
    });
    socket.on('clientSend', function (data) {
        io.sockets.emit('severSendDataFromClientToEsp', data);
    });
});

//Khởi tạo 1 server listen tại 1 port
server.listen(3000, ip.address(), function () {
    console.log(`server run o${ip.address()}:${3000} `);

});