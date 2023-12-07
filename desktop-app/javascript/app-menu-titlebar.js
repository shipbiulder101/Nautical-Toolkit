$(document).ready(function(){
    var titlebar='<img src="../res/app-icon.png" alt="" id="app-logo">'+  
    '<div id="app-title">Nautical Tools</div>'+
    '<div id="app-update">App updating</div>'+
    '<div id="titlebar-btns">'+
      '<button id="minimize-btn">-</button>'+
        '<button id="maximize-btn">&#9633</button>'+
        '<button id="close-btn">x</button>';
    var menuHtml = '<a href="../pages/main.html"><button class = "main-menu-btn" id = "main-menu-main-page">Main Page</button></a>'+
'<a href="../pages/app-nautical-converter.html"><button class = "main-menu-btn" id = "main-menu-distance-btn">Nautical Converter</button></a>'+
'<a href="../pages/app-tide-calculator.html"><button class = "main-menu-btn" id = "main-menu-tide-btn">Tide Calculator</button></a>'+
'<a href="../pages/app-ais-tracking.html"><button class = "main-menu-btn" id = "main-menu-ais-btn">AIS</button></a>'+
'<a href="../pages/app-open-sea-map.html"><button class="main-menu-btn" id="main-menu-map-btn">OpenSeaMap</button></a>'+
'<a href="../pages/app-weather.html"><button class="main-menu-btn" id="main-menu-weather-btn">Weather</button></a>';
    $('#app-titlebar').append(titlebar);    
    $('#app-main-menu').append(menuHtml);
});