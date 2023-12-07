function convertDepth() {
    var dropdown1 = document.getElementById("depth-dropdown-1");
    var dropdown1Selection = dropdown1.options[dropdown1.selectedIndex].value;
    var dropdown2 = document.getElementById("depth-dropdown-2");
    var dropdown2Selection = dropdown2.options[dropdown2.selectedIndex].value;
    var inputVal = parseInt(document.getElementById("app-converter-input-depth").value);
    document.getElementById("app-converter-result-depth").innerHTML = '';
    document.getElementById("app-converter-result-depth").style.color="white";
    if(inputVal == ''){
        document.getElementById("app-converter-result-depth").style.color="red";
        document.getElementById("app-converter-result-depth").innerHTML = "Please enter a value.";
    } else {
        switch(parseInt(dropdown1Selection)){
            case 1:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-depth").style.color="red";
                        document.getElementById("app-converter-result-depth").innerHTML = "Can't convert meters to meters.";
                        break;
                    case 2:
                        document.getElementById("app-converter-result-depth").innerHTML = metersToFeet(inputVal);
                        break;
                    case 3:
                        document.getElementById("app-converter-result-depth").innerHTML = metersToFathoms(inputVal);
                }
                break;
            case 2:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-depth").innerHTML = feetToMeters(inputVal);
                        break;
                    case 2:
                        document.getElementById("app-converter-result-depth").style.color="red";
                        document.getElementById("app-converter-result-depth").innerHTML = "Can't convert feet to feet.";
                        break;
                    case 3:
                        document.getElementById("app-converter-result-depth").innerHTML = feetToFathoms(inputVal);
                }
                break;
            case 3:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-depth").innerHTML = fathomsToMeters(inputVal);
                        break;
                    case 2:
                        document.getElementById("app-converter-result-depth").innerHTML = fathomsToFeet(inputVal);
                        break;
                    case 3:
                        document.getElementById("app-converter-result-depth").style.color="red";
                        document.getElementById("app-converter-result-depth").innerHTML = "Can't convert depth.";
                }
           }
    }
}

function metersToFeet(input){
    var result = input * 3.28084;
    return round(result,1);
}

function metersToFathoms(input){
    var result = input * 0.546807;
    return round(result,1);
}

function feetToMeters(input){
    var result = input * 0.3048;
    return round(result,1);
}

function feetToFathoms(input){
    var result = input * 0.0166667;
    return round(result,1);
}

function fathomsToMeters(input){
    var result = input * 1.8288;
    return round(result,1);
}

function fathomsToFeet(input){
    var result = input*6;
    return round(result,1);
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}