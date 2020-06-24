let path = require("path");
let express = require("express");
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let ip = require("ip")
let PORT = 3000
let cron = require('cron');//Chỉ ra đường dẫn chứa css, js, images...
const { time } = require("console");
app.use(express.static(path.join(__dirname, 'public')));

//Tạo router
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});


let dataTong = { LED1: 1, LED2: 1, LED3: 1, LED4: 1 }
//Tạo socket 
io.on('connection', function (socket) {
    console.log('1 trình duyệt vừa kết nối...');
    // console.log(dataTong)

    io.sockets.emit("trinhDuyetConnect", dataTong);



    socket.on('espSend', function () {
        console.log('ESP đã vào..ư ư ư');
        io.sockets.emit('LED1', dataTong);

    });
    socket.on('LED', function (dataR) {
        console.log('Yêu cầu tắt/bat bóng');
        dataTong = dataR
        // console.log(dataTong);
        io.sockets.emit('LED1', dataTong);

    });
    socket.on('HenGio', function (dataR) {
        let timeH = dataR.time.split(":")[0],
            timeM = dataR.time.split(":")[1];

        let job = new cron.CronJob({
            cronTime: `* ${timeM} ${timeH} * * *`,
            onTick: function () {
                dataTong = dataR.data;
                console.log(`Vừa có tác vụ lúc ${dataR.time}`);
                io.sockets.emit('LED1', dataTong);
                io.sockets.emit("trinhDuyetConnect", dataTong);
                job.stop()

            },
            start: true,
            timeZone: 'Asia/Ho_Chi_Minh' // Lưu ý set lại time zone cho đúng 
        });
        job.start();
        // io.sockets.emit('LED1', dataTong);

    });
});

//Khởi tạo 1 server listen tại 1 port
// server.listen(3000, ip.address(), function () {
//     console.log(`server run o${ip.address()}:${3000} `);

// });
//run
server.listen(process.env.PORT, () => {
    console.log(
        "Server Đã khởi chạy"
    );
});