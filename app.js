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


let dataTong = { LED1: 1, LED2: 1, LED3: 1, LED4: 1 }
//Tạo socket 
io.on('connection', function (socket) {
    console.log('1 trình duyệt vừa kết nối...');
    console.log(dataTong)

    io.sockets.emit("trinhDuyetConnect", dataTong);



    socket.on('espSend', function () {
        console.log('ESP đã vào..ư ư ư');
        io.sockets.emit('LED1', dataTong);

    });
    socket.on('LED', function (dataR) {
        console.log('Yêu cầu tắt/bat bóng');
        dataTong = dataR
        console.log(dataTong);
        io.sockets.emit('LED1', dataTong);

    });
});

//Khởi tạo 1 server listen tại 1 port
server.listen(3000, ip.address(), function () {
    console.log(`server run o${ip.address()}:${3000} `);

});