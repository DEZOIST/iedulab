function showtime() {
    var myDate = new Date();
    if (myDate.getHours() >= 6 && myDate.getHours() < 10) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "早上好啊！"
    } else if (myDate.getHours() >= 10 && myDate.getHours() < 11) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "快到中午了呢！"
    } else if (myDate.getHours() >= 11 && myDate.getHours() < 13) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "吃午饭了吗？"
    } else if (myDate.getHours() >= 13 && myDate.getHours() < 17) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "都已经到下午了呢。"
    } else if (myDate.getHours() >= 17 && myDate.getHours() < 19) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "吃晚饭了吗？"
    } else if (myDate.getHours() >= 19 && myDate.getHours() < 22) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "晚上好！"
    } else if (myDate.getHours() >= 22 && myDate.getHours() < 24) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "熬夜对身体不好哦，快睡觉吧！"
    } else if (myDate.getHours() >= 0 && myDate.getHours() < 4) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "熬夜对身体不好哦，快睡觉吧！"
    } else if (myDate.getHours() >= 4 && myDate.getHours() < 5) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "再不睡天就要亮了哦！"
    } else if (myDate.getHours() >= 5 && myDate.getHours() < 6) {
        document.getElementById("time").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "起得真早啊（）还是说已经通宵了。。。"
    }
    if (myDate.getHours() >= 6 && myDate.getHours() < 10) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "早上好啊！"
    } else if (myDate.getHours() >= 10 && myDate.getHours() < 11) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "快到中午了呢！"
    } else if (myDate.getHours() >= 11 && myDate.getHours() < 13) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "吃午饭了吗？"
    } else if (myDate.getHours() >= 13 && myDate.getHours() < 17) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "都已经到下午了呢。"
    } else if (myDate.getHours() >= 17 && myDate.getHours() < 19) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "吃晚饭了吗？"
    } else if (myDate.getHours() >= 19 && myDate.getHours() < 22) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "晚上好！"
    } else if (myDate.getHours() >= 22 && myDate.getHours() < 24) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "熬夜对身体不好哦，快睡觉吧！"
    } else if (myDate.getHours() >= 0 && myDate.getHours() < 4) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "熬夜对身体不好哦，快睡觉吧！"
    } else if (myDate.getHours() >= 4 && myDate.getHours() < 5) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "再不睡天就要亮了哦！"
    } else if (myDate.getHours() >= 5 && myDate.getHours() < 6) {
        document.getElementById("time1").innerHTML = "现在的时间是" + myDate.getHours() + "时" + myDate.getMinutes() + "分" + myDate.getSeconds() + "秒，" + "起得真早啊（）还是说已经通宵了。。。"
    }

    setTimeout("showtime()", 1000);
}

//时间提示



var $$ = mdui.JQ;
$$(document).ready(function() {
    mdui.snackbar({
        message: '欢迎来到DEZALER的网页(｀・ω・´)',
        position: 'right-bottom',
        buttonText: '关闭',
        buttonColor: '#9999ff',
        timeout: '5000',
    });

    var inst = new mdui.Drawer('#left-drawer');
    inst.toggle();
    inst.toggle();
    showtime();
    // var tab = document.getElementById('t');
    // tab.click();
});
//加载完成时执行