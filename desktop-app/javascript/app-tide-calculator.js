function calculate(){
    document.getElementById("app-tide-result").style.color = "white";
    var timeRec = document.getElementById("app-tide-input-timereq").value;
    var lwHeight = document.getElementById("app-tide-input-lwheight").value;
    var hwHeight = document.getElementById("app-tide-input-hwheight").value;
    var lwTime = document.getElementById("app-tide-input-lwtime").value;
    var hwTime = document.getElementById("app-tide-input-hwtime").value;
    if(lwHeight <= hwHeight){
        var result = interpolate(lwTime, timeRec, hwTime, parseInt(lwHeight), parseInt(hwHeight));
        if(result != "NaN"){
            document.getElementById("app-tide-result").innerHTML = result + "m";
        } else {
            document.getElementById("app-tide-result").style.color = "red";
            document.getElementById("app-tide-result").innerHTML = "Please ensure all fields are completed.";
        }

    } else {
        document.getElementById("app-tide-result").style.color = "red";
        document.getElementById("app-tide-result").innerHTML = "High water height must be greater than low water height.";
    }
}

function reset(){
    document.getElementById("app-tide-input-timereq").value="--:--"
    document.getElementById("app-tide-input-lwheight").value = "";
    document.getElementById("app-tide-input-hwheight").value = "";
    document.getElementById("app-tide-input-lwtime").value = "--:--";
    document.getElementById("app-tide-input-hwtime").value = "--:--";
    document.getElementById("app-tide-result").style.color = "white";
    document.getElementById("app-tide-result").innerHTML = "";
}

function interpolate(x1, x, x2, y1, y2){
    var heightOfTide;
    heightOfTide = y1 + (convertToSecs(x) - convertToSecs(x1))/(convertToSecs(x2)-convertToSecs(x1))*(y2-y1); //based on y = y1 + (x –x1) ÷ (x2 –x1) x (y2 –y1)
    return heightOfTide;
}

function convertToSecs(timeString){
    var a = timeString.split(':'); // split it at the colons
    var timeSec = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
    console.log(timeSec);
    return parseInt(timeSec);
}