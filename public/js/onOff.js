
$("#b1").bind("mousemove", function () {
    move1()
})
$("#b2").bind("mousemove", function () {
    move2()
})
$("#b3").bind("mousemove", function () {
    move3()
})
$("#b4").bind("mousemove", function () {
    move4()
})
$("#btn-settime1").bind("mousemove", function () {
    $(this).addClass("runlungtung")
    $("#settime1").addClass("hides")
})
$("#btn-settime2").bind("mousemove", function () {
    $(this).addClass("runlungtung")
    $("#settime2").addClass("hides")
})
$("#btn-settime3").bind("mousemove", function () {
    $(this).addClass("runlungtung")
    $("#settime3").addClass("hides")
})
$("#btn-settime4").bind("mousemove", function () {
    $(this).addClass("runlungtung")
    $("#settime4").addClass("hides")
})
function move1() {
    var x = Math.random() * 250
    var y = Math.random() * 250
    var left = x + 'px'
    var top = y + 'px'
    document.getElementById('b1').style.left = left
    document.getElementById('b1').style.top = top
}
function move2() {
    var x = Math.random() * 250
    var y = Math.random() * 250
    var left = x + 'px'
    var top = y + 'px'
    document.getElementById('b2').style.left = left
    document.getElementById('b2').style.top = top
}
function move3() {
    var x = Math.random() * 250
    var y = Math.random() * 250
    var left = x + 'px'
    var top = y + 'px'
    document.getElementById('b3').style.left = left
    document.getElementById('b3').style.top = top
}
function move4() {
    var x = Math.random() * 250
    var y = Math.random() * 250
    var left = x + 'px'
    var top = y + 'px'
    document.getElementById('b4').style.left = left
    document.getElementById('b4').style.top = top
}

