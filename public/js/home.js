$(document).ready(function () {
    //Kết nối tới server socket đang lắng nghe
    var socket = io();
    let data;
    socket.on("trinhDuyetConnect", function (dataRe) {
        data = dataRe
        // console.log(dataRe)
        if (dataRe.LED1 == 1) {
            $("#b1").addClass("text-primary");
            $("#b1").data('b1', 1);
            $("#btn-settime1").text("Hẹn giờ tắt");
        }
        if (dataRe.LED2 == 1) {
            $("#b2").addClass("text-success")
            $("#b2").data('b2', 1);
            $("#btn-settime2").text("Hẹn giờ tắt");
        }
        if (dataRe.LED3 == 1) {
            $("#b3").addClass("text-info")
            $("#b3").data('b3', 1);
            $("#btn-settime3").text("Hẹn giờ tắt");
        }
        if (dataRe.LED4 == 1) {
            $("#b4").addClass("text-warning")
            $("#b4").data('b4', 1);
            $("#btn-settime4").text("Hẹn giờ tắt");
        }

        if (dataRe.LED1 == 0) {
            $("#b1").removeClass("text-primary")
            $("#b1").data('b1', 0);
            $("#btn-settime1").text("Hẹn giờ bật");
        }
        if (dataRe.LED2 == 0) {
            $("#b2").removeClass("text-success")
            $("#b2").data('b2', 0);
            $("#btn-settime2").text("Hẹn giờ bật");
        }
        if (dataRe.LED3 == 0) {
            $("#b3").removeClass("text-info")
            $("#b3").data('b3', 0);
            $("#btn-settime3").text("Hẹn giờ bật");
        }
        if (dataRe.LED4 == 0) {
            $("#b4").removeClass("text-warning")
            $("#b4").data('b4', 0);
            $("#btn-settime4").text("Hẹn giờ bật");
        }

    })

    //#region Bật tắt bóng thủ công
    $("#b1").unbind("click").on("click", function () {
        var trangthai = $(this).data('b1');
        if (trangthai == 0) {
            $(this).addClass("text-primary");
            $(this).data('b1', 1);

            data.LED1 = 1;
            socket.emit("LED", data);
            $("#btn-settime1").text("Hẹn giờ tắt");
        }
        if (trangthai == 1) {
            $(this).removeClass("text-primary");
            $(this).data('b1', 0);
            data.LED1 = 0;
            socket.emit("LED", data);
            $("#btn-settime1").text("Hẹn giờ bất");
        }
    })
    $("#b2").unbind("click").on("click", function () {
        var trangthai = $(this).data('b2');
        if (trangthai == 0) {
            $(this).addClass("text-success");
            $(this).data('b2', 1);
            data.LED2 = 1;
            socket.emit("LED", data);
            $("#btn-settime2").text("Hẹn giờ tắt");
        }
        if (trangthai == 1) {
            $(this).removeClass("text-success");
            $(this).data('b2', 0);
            data.LED2 = 0;
            socket.emit("LED", data);
            $("#btn-settime2").text("Hẹn giờ bật");
        }
    })
    $("#b3").unbind("click").on("click", function () {
        var trangthai = $(this).data('b3');
        if (trangthai == 0) {
            $(this).addClass("text-info");
            $(this).data('b3', 1);
            data.LED3 = 1;
            socket.emit("LED", data);
            $("#btn-settime3").text("Hẹn giờ tắt");
        }
        if (trangthai == 1) {
            $(this).removeClass("text-info");
            $(this).data('b3', 0);
            data.LED3 = 0;
            socket.emit("LED", data);
            $("#btn-settime3").text("Hẹn giờ bật");
        }
    })
    $("#b4").unbind("click").on("click", function () {
        var trangthai = $(this).data('b4');
        if (trangthai == 0) {
            $(this).addClass("text-warning");
            $(this).data('b4', 1);
            data.LED4 = 1;
            socket.emit("LED", data);
            $("#btn-settime4").text("Hẹn giờ tắt");
        }
        if (trangthai == 1) {
            $(this).removeClass("text-warning");
            $(this).data('b4', 0);
            data.LED4 = 0;
            socket.emit("LED", data);
            $("#btn-settime4").text("Hẹn giờ bật");
        }
    })
    //#endregion Bật tắt bóng thủ công


    //#region Hẹn giờ
    $("#btn-settime1").bind("click", function () {
        let time = $("#settime1").val();
        if (time !== "") {
            let htime = time.split(":")[0];
            let mtime = time.split(":")[1];
            let d = new Date();
            if (htime < d.getHours() || mtime <= d.getMinutes()) {// 
                alert("Thời gian không hợp lệ!");
                return;
            }
            let trangthai = $("#b1").data('b1');


            if (trangthai == 0) {
                data.LED1 = 1;
                console.log("Yeu cau bat");
                socket.emit("HenGio", { data: data, time: time });
            }
            if (trangthai == 1) {
                data.LED1 = 0;
                console.log("Yeu cau tat");
                socket.emit("HenGio", { data: data, time: time });
            }
        }
        else alert("Thời gian không hợp lệ!");
    })
    $("#btn-settime2").bind("click", function () {
        let time = $("#settime2").val();
        if (time !== "") {
            let htime = time.split(":")[0];
            let mtime = time.split(":")[1];
            let d = new Date();
            if (htime < d.getHours() || mtime <= d.getMinutes()) {// 
                alert("Thời gian không hợp lệ!");
                return;
            }
            let trangthai = $("#b2").data('b2');


            if (trangthai == 0) {
                data.LED2 = 1;
                console.log("Yeu cau bat bong 2");
                socket.emit("HenGio", { data: data, time: time });
            }
            if (trangthai == 1) {
                data.LED2 = 0;
                console.log("Yeu cau tat bong 2");
                socket.emit("HenGio", { data: data, time: time });
            }
        }
        else alert("Thời gian không hợp lệ!");
    })
    $("#btn-settime3").bind("click", function () {
        let time = $("#settime3").val();
        if (time !== "") {
            let htime = time.split(":")[0];
            let mtime = time.split(":")[1];
            let d = new Date();
            if (htime < d.getHours() || mtime <= d.getMinutes()) {// 
                alert("Thời gian không hợp lệ!");
                return;
            }
            let trangthai = $("#b3").data('b3');


            if (trangthai == 0) {
                data.LED2 = 1;
                console.log("Yeu cau bat bong 3");
                socket.emit("HenGio", { data: data, time: time });
            }
            if (trangthai == 1) {
                data.LED2 = 0;
                console.log("Yeu cau tat bong 3");
                socket.emit("HenGio", { data: data, time: time });
            }
        }
        else alert("Thời gian không hợp lệ!");
    })
    $("#btn-settime4").bind("click", function () {
        let time = $("#settime4").val();
        if (time !== "") {
            let htime = time.split(":")[0];
            let mtime = time.split(":")[1];
            let d = new Date();
            if (htime < d.getHours() || mtime <= d.getMinutes()) {// 
                alert("Thời gian không hợp lệ!");
                return;
            }
            let trangthai = $("#b4").data('b4');


            if (trangthai == 0) {
                data.LED2 = 1;
                console.log("Yeu cau bat bong 4");
                socket.emit("HenGio", { data: data, time: time });
            }
            if (trangthai == 1) {
                data.LED2 = 0;
                console.log("Yeu cau tat bong 4");
                socket.emit("HenGio", { data: data, time: time });
            }
        }
        else alert("Thời gian không hợp lệ!");
    })
    //#endregion

})