var myLoc;
var myMap;
var canvas;
var polimiLat = 45.5026818;
var polimiLon = 9.1541642;
var pakistanLat = 30.0681012;
var pakistanLon = 60.3230273;
var qatarLat = 25.2281055;
var qatarLon = 55.1711753;
var afghanistanLat = 25.23339;
var afghanistanLon = 55.1721973;
var bangladeshLat = 25.2311408;
var bangladeshLon = 55.1774355;
var iranLat = 31.99194;
var iranLon = 44.6622589;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoidmFsZXJpb2FuZHJpbmkiLCJhIjoiY2pvcXo2NWtsMGE3YTNqcHRuc215MWhydyJ9.wCaa1JvAjgydJhCOWtwNDg');
var options = {
  lat : pakistanLat,
  lng : pakistanLon,
  zoom: 1,
  pitch: 15
}
function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}
   function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  var distance1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, pakistanLat, pakistanLon, "km");
  console.log(distance1);
  var distance2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, qatarLat, qatarLon, "km");
  console.log(dista nce2);
  var distance3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, afghanistanLat, afghanistanLon, "km");
  console.log(distance3);
  var distance4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, bangladeshLat, bangladeshLon, "km");
  console.log(distance4);
  var distance5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, iranLat, iranLon, "km");
  console.log(distance5);
}

 function draw() {

 clear();
 fill('black')
 rect(55,85,990,55)
fill('white');
textSize(55);
text('Ongoing armed conflicts',65, 133);
fill('yellow');
  textSize(18);
  var point1 = myMap.latLngToPixel(pakistanLat, pakistanLon);
  ellipse(point1.x, point1.y, 35);
  var point2 = myMap.latLngToPixel(qatarLat, qatarLon);
  ellipse(point2.x, point2.y, 35);
  var point3 = myMap.latLngToPixel(afghanistanLat, afghanistanLon);
  ellipse(point3.x, point3.y, 35);
  var point4 = myMap.latLngToPixel(bangladeshLat, bangladeshLon);
  ellipse(point4.x, point4.y, 35);
  var point5 = myMap.latLngToPixel(iranLat, iranLon);
  ellipse(point5.x, point5.y, 35);
}
