var hr =00;
var min = 00;
var sec = 00;
var timer = false;
function start() {
    timer = true;
    stopWatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    min = 00;
    hr = 00;
    sec = 00;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}
function stopWatch()
{ 
    if(timer==true) {
        sec = sec+1;
        if(sec==60)
        { 
            min = min+1;
            sec = 00;
        }
        if(min==60)
        { 
            hr = hr+1;
            min = 00;
            sec = 00;
        }
        document.getElementById("hr").innerHTML =hr;
        document.getElementById("sec").innerHTML =sec;
        document.getElementById("min").innerHTML=min;
        setTimeout("stopWatch()",1000);
    }}