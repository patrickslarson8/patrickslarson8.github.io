var home = document.getElementById("home-nav");
var about = document.getElementById("about-nav");
var background = document.getElementById("background-nav");
var projects = document.getElementById("projects-nav");

var marker_style = document.getElementById("nav-marker").style;
marker_style.visibility = "visible";

home.onclick = function() {marker_style.top = "15px"}
projects.onclick = function() {marker_style.top = "74px"}
about.onclick = function() {marker_style.top = "135px"}
background.onclick = function() {marker_style.top = "193px"}