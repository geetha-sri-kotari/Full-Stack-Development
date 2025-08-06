let min = 0, sec = 0, hr = 0;
let cnt = 0;
var startTimer;
function startTime () {
    cnt = cnt + 1;
    if(cnt == 1) {
        startTimer = setInterval(function() {
        sec = sec + 1;
        if(sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if(min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        document.getElementsByClassName("minutes")[0].innerText = parseInt(min);
        document.getElementsByClassName("seconds")[0].innerText = parseInt(sec);
        document.getElementsByClassName("hours")[0].innerText = parseInt(hr);
        console.log(hr, min, sec);
    }, 1000);
    }
}

const stopTimer = () => {
    clearInterval(startTimer);
    alert(`wallah! ${parseInt(hr)} hr ${parseInt(min)} min ${parseInt(sec)} sec`);
}
const startFresh = () => {
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementsByClassName("minutes")[0].innerText = parseInt(min);
    document.getElementsByClassName("seconds")[0].innerText = parseInt(sec);
    document.getElementsByClassName("hours")[0].innerText = parseInt(hr);
}