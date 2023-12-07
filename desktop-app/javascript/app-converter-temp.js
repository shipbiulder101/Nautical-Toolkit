function convertTemp(){
    var dropdown1 = document.getElementById("temp-dropdown-1");
    var dropdown1Selection = dropdown1.options[dropdown1.selectedIndex].value;
    var dropdown2 = document.getElementById("temp-dropdown-2");
    var dropdown2Selection = dropdown2.options[dropdown2.selectedIndex].value;
    var inputVal = parseInt(document.getElementById("app-converter-input-temp").value);
    document.getElementById("app-converter-result-temp").innerHTML = '';
    document.getElementById("app-converter-result-temp").style.color="white";
    if(inputVal == ''){
        document.getElementById("app-converter-result-depth").style.color="red";
        document.getElementById("app-converter-result-depth").innerHTML = "Please enter a value.";
    }else{
        switch(parseInt(dropdown1Selection)){
            case 1:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-temp").style.color="red";
                        document.getElementById("app-converter-result-temp").innerHTML = "Can't convert celcius to celcius.";
                        break;
                    case 2:
                        document.getElementById("app-converter-result-temp").innerHTML = CtoF(inputVal)+"<sup>o</sup>C";
                        break;
                }
                break;
            case 2:
                switch(parseInt(dropdown2Selection)){
                    case 1:
                        document.getElementById("app-converter-result-temp").innerHTML = FtoC(inputVal)+"<sup>o</sup>F";
                        break;
                    case 2:
                        document.getElementById("app-converter-result-temp").style.color="red";
                        document.getElementById("app-converter-result-temp").innerHTML = "Can't convert farenheit to farenheit.";
                        break;
                }
        }
    }
}

function CtoF(rawVal){
    var valC = (rawVal*(9/5))+32;
    return round(valC, 1);
}

function FtoC(rawVal){
    var valF = (rawVal-32)*(5/9)
    return round(valF, 1);
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}