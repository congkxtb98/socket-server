$(document).ready(function () {
    let json = {
        LED1: 0,
        LED2: 0,
        LED3: 0,
        LED4: 0,
    }

    //Bong so 1 code o day
    $(".fa-lightbulb-o.bong1").unbind("click").on("click", function () {
        var trangthai = $(this).data('ttb1');
        if (trangthai == 0) {
            $(this).addClass("active");
            $(this).data('ttb1', 1);
            json.LED1 = 1;
            socket.emit("LED1", json);


        }
        else if (trangthai == 1) {
            $(this).removeClass("active");
            $(this).data('ttb1', 0);
            json.LED1 = 0;
            socket.emit("LED1", json);


        }
    })

    //Bong so 2 code o day
    $(".fa-lightbulb-o.bong2").unbind("click").on("click", function () {
        var trangthai = $(this).data('ttb1');



        if (trangthai == 0) {
            $(this).addClass("active");
            $(this).data('ttb1', 1);
            json.LED2 = 1;
            socket.emit("LED2", json);

        }
        else if (trangthai == 1) {
            $(this).removeClass("active");
            $(this).data('ttb1', 0);
            json.LED2 = 0;
            socket.emit("LED2", json);


        }
    })


    //Bong so 3 code o day
    $(".fa-lightbulb-o.bong3").unbind("click").on("click", function () {
        var trangthai = $(this).data('ttb1');



        if (trangthai == 0) {
            $(this).addClass("active1");
            $(this).data('ttb1', 1);
            json.LED3 = 1;
            socket.emit("LED3", json);

        }
        else if (trangthai == 1) {
            $(this).removeClass("active1");
            $(this).data('ttb1', 0);
            json.LED3 = 0;
            socket.emit("LED3", json);


        }
    })

    //Bong so 4 code o day
    $(".fa-lightbulb-o.bong4").unbind("click").on("click", function () {
        var trangthai = $(this).data('ttb1');



        if (trangthai == 0) {
            $(this).addClass("active1");
            $(this).data('ttb1', 1);
            json.LED4 = 1;
            socket.emit("LED4", json);

        }
        else if (trangthai == 1) {
            $(this).removeClass("active1");
            $(this).data('ttb1', 0);
            json.LED4 = 0;
            socket.emit("LED4", json);


        }
    })
})