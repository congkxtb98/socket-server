$(document).ready(function () {
    //Kết nối tới server socket đang lắng nghe
    var socket = io();
    socket.on("severSendDataFromEspToClient", function (data) {
        console.log("đây là gói tin từ esp vể");
        console.log(data);

    })
    socket.on("severSendDataFromClientToEsp", function (data) {
        console.log("đây là gói tin tu client len");
        console.log(data);

    })

    //Bắt sự kiện click gửi button
    $(".nut1").bind('click', function () {//gui len
        var text = $('#input1').val();
        socket.emit("clientSend", text);
    })
    $(".nut2").bind('click', function () {
        var text = $('#input2').val();
        socket.emit("espSend", text);
    })
})