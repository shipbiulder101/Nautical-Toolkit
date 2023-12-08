function convertDistance() {
    var dropdown1 = document.getElementById("distance-dropdown-1");
    var dropdown1Selection = dropdown1.options[dropdown1.selectedIndex].value;
    var dropdown2 = document.getElementById("distance-dropdown-2");
    var dropdown2Selection = dropdown2.options[dropdown2.selectedIndex].value;
    var inputVal = parseInt(document.getElementById("app-converter-input-distance").value);
    document.getElementById("app-converter-result-distance").innerHTML = '';
    document.getElementById("app-converter-result-distance").style.color="white";
    if(inputVal == ''){
        document.getElementById("app-converter-result-distance").style.color="red";
        document.getElementById("app-converter-result-distance").innerHTML = "Please enter a value.";
    } else {
        switch(parseInt(dropdown1Selection)){
            case 1:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-distance").style.color="red";
                        document.getElementById("app-converter-result-distance").innerHTML = "Can't convert miles to miles.";
                        break;
                    case 2:
                        document.getElementById("app-converter-result-distance").innerHTML = milesToNMiles(inputVal);
                        break;
                    case 3:
                        document.getElementById("app-converter-result-distance").innerHTML = milesToCables(inputVal);
                }
                break;
            case 2:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-distance").innerHTML = nMilesToMiles(inputVal);
                        break;
                    case 2:
                        document.getElementById("app-converter-result-distance").style.color="red";
                        document.getElementById("app-converter-result-distance").innerHTML = "Can't convert nautical miles to nautical miles.";
                        break;
                    case 3:
                        document.getElementById("app-converter-result-distance").innerHTML = nMilesToCables(inputVal);
                }
                break;
            case 3:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-distance").innerHTML = cableToMiles(inputVal);
                        break;
                    case 2:
                        document.getElementById("app-converter-result-distance").innerHTML = cablesToNMiles(inputVal);
                        break;
                    case 3:
                        document.getElementById("app-converter-result-distance").style.color="red";
                        document.getElementById("app-converter-result-distance").innerHTML = "Can't convert cables to cables.";
                }
           }
    }
}

function milesToNMiles(input){
    var result = input * 0.86897624;
    return round(result,1);
}

function nMilesToCables(input){
    var result = input*10;
    return round(result,1);
}

function milesToCables(input){
    var result = (input * 0.8697624)*10;
    return round(result,1);
}

function cablesToNMiles(input){
    var result = input/10;
    return round(result,1);
}

function nMilesToMiles(input){
    var result = input * 1.1507794;
    return round(result,1);
}

function cableToMiles(input){
    var result = (input/10)*1.0507794;
    return round(result,1);
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}