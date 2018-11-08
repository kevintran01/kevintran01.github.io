function clock() {
    var fullDate = new Date();
    var twentyFourHour = fullDate.getHours();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var mid = 'PM';

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    if (twentyFourHour < 12) {
        mid = 'AM';
    }


    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerText =":" + mins;
    document.getElementById("second").innerText =":" + secs + " " + mid;
}

setInterval(clock, 100);