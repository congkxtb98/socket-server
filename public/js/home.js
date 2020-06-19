$(document).ready(function () {
    //Kết nối tới server socket đang lắng nghe
    var socket = io();
    let data;
    socket.on("trinhDuyetConnect", function (dataRe) {
        data = dataRe
        console.log(dataRe)
        if (dataRe.LED1 == 1) {
            $("#b1").addClass("text-primary");
            $("#b1").attr('data-b1', 1);
        }
        if (dataRe.LED2 == 1) {
            $("#b2").addClass("text-success")
            $("#b2").attr('data-b2', 1);
        }
        if (dataRe.LED3 == 1) {
            $("#b3").addClass("text-info")
            $("#b3").attr('data-b3', 1);
        }
        if (dataRe.LED4 == 1) {
            $("#b4").addClass("text-warning")
            $("#b4").attr('data-b4', 1);
        }

        if (dataRe.LED1 == 0) {
            $("#b1").removeClass("text-primary")
            $("#b1").attr('data-b1', 0);
        }
        if (dataRe.LED2 == 0) {
            $("#b2").removeClass("text-success")
            $("#b2").attr('data-b2', 0);
        }
        if (dataRe.LED3 == 0) {
            $("#b3").removeClass("text-info")
            $("#b3").attr('data-b3', 0);
        }
        if (dataRe.LED4 == 0) {
            $("#b4").removeClass("text-warning")
            $("#b4").attr('data-b4', 0);
        }

    })

    $("#b1").unbind("click").on("click", function () {
        var trangthai = $(this).data('b1');
        if (trangthai == 0) {
            $(this).addClass("text-primary");
            $(this).data('b1', 1);
            data.LED1 = 1;
            socket.emit("LED", data);
        }
        if (trangthai == 1) {
            $(this).removeClass("text-primary");
            $(this).data('b1', 0);
            data.LED1 = 0;
            socket.emit("LED", data);
        }
    })
    $("#b2").unbind("click").on("click", function () {
        var trangthai = $(this).data('b2');
        if (trangthai == 0) {
            $(this).addClass("text-success");
            $(this).data('b2', 1);
            data.LED2 = 1;
            socket.emit("LED", data);
        }
        if (trangthai == 1) {
            $(this).removeClass("text-success");
            $(this).data('b2', 0);
            data.LED2 = 0;
            socket.emit("LED", data);
        }
    })
    $("#b3").unbind("click").on("click", function () {
        var trangthai = $(this).data('b3');
        if (trangthai == 0) {
            $(this).addClass("text-info");
            $(this).data('b3', 1);
            data.LED3 = 1;
            socket.emit("LED", data);
        }
        if (trangthai == 1) {
            $(this).removeClass("text-info");
            $(this).data('b3', 0);
            data.LED3 = 0;
            socket.emit("LED", data);
        }
    })
    $("#b4").unbind("click").on("click", function () {
        var trangthai = $(this).data('b4');
        if (trangthai == 0) {
            $(this).addClass("text-warning");
            $(this).data('b4', 1);
            data.LED4 = 1;
            socket.emit("LED", data);
        }
        if (trangthai == 1) {
            $(this).removeClass("text-warning");
            $(this).data('b4', 0);
            data.LED4 = 0;
            socket.emit("LED", data);
        }
    })

})