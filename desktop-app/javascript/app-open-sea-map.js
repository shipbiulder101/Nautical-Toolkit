var map = L.map('app-map').setView([51.121, 1.313], 13, [osm, openSeaMap]);
//base layers
//Street map using OpenStreetMap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{attribution: 'Map data &copy; <a onclick="openLink(\'https://www.openstreetmap.org/\')" href="#">OpenStreetMap</a> contributors, <a onclick="openLink(\'https://creativecommons.org/licenses/by-sa/2.0/\')" href="#">CC-BY-SA</a>', zIndex: 0}).addTo(map);
//Satelite map using Ersi
var sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', maxZoom: 19, zIndex: 0});

var classical = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16, zIndex: 0
});


var baseLayers = {
    "OpenStreetMap": osm,
    "Satelite": sat,
    "Classial":classical
}

var hybridOverlay = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/hybrid/webmercator/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Imagery from <a onclick="openLink(\'http://giscience.uni-hd.de/\')" href="#">GIScience Research Group @ University of Heidelberg</a> | Map data &copy; <a onclick="openLink(\'https://www.openstreetmap.org/copyright\')" href="#">OpenStreetMap</a> contributors'
    });

map.on("baselayerchange",
function(e) {
  // e.name has the layer name
  // e.layer has the layer reference
  console.log(e.name);
  if(e.name == "Satelite"){
    hybridOverlay.addTo(map);
  } else {
      if(map.hasLayer(hybridOverlay)){
          map.removeLayer(hybridOverlay);
      }
  }
});

var t = L.terminator();
setInterval(function(){updateTerminator(t)}, 500);
function updateTerminator(t) {
  t.setTime();
}

var overlays = {
    "Day Cycle": t
}

//Chart layer using OpenSeaMap
L.control.layers(baseLayers, overlays, {autoZIndex: false}).addTo(map);
var openSeaMap = L.tileLayer('http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {attribution: 'Map data: &copy; <a onclick="openLink(\'http://www.openseamap.org\')">OpenSeaMap</a> contributors', zIndex: 1}).addTo(map);
L.control.mouseCoordinate({gpsLong: true}).addTo(map);